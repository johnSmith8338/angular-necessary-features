import { Routes } from '@angular/router';
import { ShowMore } from './pages/show-more/show-more';
import { NotFound } from './pages/not-found/not-found';
import { Slots } from './pages/slots/slots';
import { StepsByButtons } from './pages/steps-by-buttons/steps-by-buttons';
import { DeferLoading } from './pages/defer-loading/defer-loading';
import { SvgTemplate } from './pages/svg-template/svg-template';
import { StopRepeatContent } from './pages/stop-repeat-content/stop-repeat-content';
import { ClickOutsideTest } from './pages/click-outside-test/click-outside-test';
import { DragDropList } from './pages/drag-drop-list/drag-drop-list';
import { DragResize } from './pages/drag-resize/drag-resize';
import { CdkModal } from './pages/cdk-modal/cdk-modal';
import { CopyToClipboard } from './pages/copy-to-clipboard/copy-to-clipboard';
import { Accordion } from './pages/accordion/accordion';
import { CssVariables } from './pages/css-variables/css-variables';
import { Home } from './pages/home/home';
import { AngularForm } from './pages/angular-forms/angular-form/angular-form';
import { ReactiveForm } from './pages/angular-forms/reactive-form/reactive-form';
import { SignalFormHybrid } from './pages/angular-forms/signal-form-hybrid/signal-form-hybrid';
import { SignalFormAsyncValidation } from './pages/angular-forms/signal-form-async-validation/signal-form-async-validation';
import { Aria } from './pages/aria-components/aria/aria';
import { AriaAccordion } from './pages/aria-components/aria-accordion/aria-accordion';
import { AriaCombobox } from './pages/aria-components/aria-combobox/aria-combobox';
import { AriaListbox } from './pages/aria-components/aria-listbox/aria-listbox';
import { AriaMultiselect } from './pages/aria-components/aria-multiselect/aria-multiselect';
import { AriaTabs } from './pages/aria-components/aria-tabs/aria-tabs';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        data: {
            title: 'home-page',
            showInMenu: false,
        }
    },
    {
        path: 'show-more-button',
        component: ShowMore,
        data: {
            title: 'show-more',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'slots',
        component: Slots,
        data: {
            title: 'slots',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'steps',
        component: StepsByButtons,
        data: {
            title: 'steps',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'defer-load',
        component: DeferLoading,
        data: {
            title: '@defer',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'svg',
        component: SvgTemplate,
        data: {
            title: 'svg',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'stop-repeat-content',
        component: StopRepeatContent,
        data: {
            title: 'ngTemplateOutlet',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'click-outside-directive',
        component: ClickOutsideTest,
        data: {
            title: 'click-outside',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'drag-drop-list',
        component: DragDropList,
        data: {
            title: 'drag-drop',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'drag-to-resize',
        component: DragResize,
        data: {
            title: 'drag-resize',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'cdk-modal',
        component: CdkModal,
        data: {
            title: 'modal',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'copy-to-clipboard',
        component: CopyToClipboard,
        data: {
            title: 'copy',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'accordion',
        component: Accordion,
        data: {
            title: 'accordion',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'css-variables',
        component: CssVariables,
        data: {
            title: 'variables',
            showInMenu: true,
            group: 'CDK'
        }
    },
    {
        path: 'angular-forms',
        component: AngularForm,
        data: {
            title: 'forms',
            showInMenu: true,
        },
        children: [
            {
                path: 'reactive-form',
                component: ReactiveForm,
                data: {
                    title: 'reactive-form',
                    group: 'FORMS'
                },
            },
            {
                path: 'signal-form-hybrid',
                component: SignalFormHybrid,
                data: {
                    title: 'form-hybrid',
                    group: 'FORMS'
                },
            },
            {
                path: 'signal-form-asyc-validation',
                component: SignalFormAsyncValidation,
                data: {
                    title: 'asyc-validation',
                    group: 'FORMS'
                },
            }
        ]
    },
    {
        path: 'aria-components',
        component: Aria,
        data: {
            title: 'aria-components',
            showInMenu: false,
        },
        children: [
            {
                path: 'aria-accordion',
                component: AriaAccordion,
                data: {
                    title: 'accordion',
                    group: 'ARIA'
                },
            },
            {
                path: 'aria-combobox',
                component: AriaCombobox,
                data: {
                    title: 'combobox',
                    group: 'ARIA'
                },
            },
            {
                path: 'aria-listbox',
                component: AriaListbox,
                data: {
                    title: 'listbox',
                    group: 'ARIA'
                },
            },
            {
                path: 'aria-multiselect',
                component: AriaMultiselect,
                data: {
                    title: 'multiselect',
                    group: 'ARIA'
                },
            },
            {
                path: 'aria-tabs',
                component: AriaTabs,
                data: {
                    title: 'tabs',
                    group: 'ARIA'
                },
            }
        ]
    },
    {
        path: '**',
        component: NotFound,
        data: {
            title: '404',
            showInMenu: false,
        }
    }
];
