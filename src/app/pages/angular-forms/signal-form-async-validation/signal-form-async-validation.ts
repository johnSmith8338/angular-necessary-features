import { ChangeDetectionStrategy, Component, resource, signal } from '@angular/core';
import { debounce, form, minLength, required, validateAsync, FormRoot, FormField } from '@angular/forms/signals';

interface SignUpModel {
  userName: string;
}

@Component({
  selector: 'app-signal-form-async-validation',
  imports: [FormRoot, FormField],
  templateUrl: './signal-form-async-validation.html',
  styleUrl: './signal-form-async-validation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalFormAsyncValidation {
  protected readonly model = signal<SignUpModel>({
    userName: ''
  })

  protected readonly form = form(
    this.model,
    config => {
      required(config.userName, { message: 'Name is required' });
      minLength(config.userName, 3,
        { message: 'Name must be at least 3 characters' });
      validateAsync(config.userName, {
        params: ({ value }) => {
          const val = value();
          if (!val || val.length < 3) {
            return undefined;
          }
          return val;
        },
        factory: params =>
          resource({
            params,
            loader: async ({ params }) => {
              const username = params;
              const available = await this.checkUsernameAvailability(username);
              return available;
            }
          }),
        onSuccess: (result: boolean) => {
          if (result === false) {
            return {
              kind: 'username_taken',
              message: 'This username is already taken'
            }
          }
          return null;
        },
        onError: (error: unknown) => {
          console.error('Validation error:', error);
          return null;
        }
      });
      debounce(config.userName, 300);
    },
    {
      submission: {
        /**
         * @params for ignoreValidators:
         * @param 'all' - allows submission even if field is invalid or empty
         * @param 'none' - form will not submit if validation faild or pending is running
         * @param 'pending' - form will be submited even if async validators not finnished executing
         */
        ignoreValidators: 'none',
        action: async form => {
          console.log('Form Value:', form().value());
          await new Promise(resolve => setTimeout(resolve, 1000));
        },
        onInvalid: (field, detail) => {
          const first = detail.root().errorSummary()?.[0];
          first?.fieldTree()?.focusBoundControl?.();
        }
      }
    }
  );

  private checkUsernameAvailability(userName: string): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        const taken = ['admin', 'test'];
        resolve(!taken.includes(userName.toLowerCase()));
      }, 3000);
    });
  }
}
