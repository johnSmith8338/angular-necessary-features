import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';
import { DragDropList } from './pages/cdk-folder/drag-drop-list/drag-drop-list';
import { DragResize } from './pages/cdk-folder/drag-resize/drag-resize';
import { CdkModal } from './pages/cdk-folder/cdk-modal/cdk-modal';
import { CopyToClipboard } from './pages/cdk-folder/copy-to-clipboard/copy-to-clipboard';
import { Accordion } from './pages/cdk-folder/accordion/accordion';
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
import { CdkComponents } from './pages/cdk-folder/cdk-components/cdk-components';
import { CssVariables } from './pages/other-folder/css-variables/css-variables';
import { ShowMore } from './pages/other-folder/show-more/show-more';
import { Slots } from './pages/other-folder/slots/slots';
import { StepsByButtons } from './pages/other-folder/steps-by-buttons/steps-by-buttons';
import { DeferLoading } from './pages/other-folder/defer-loading/defer-loading';
import { SvgTemplate } from './pages/other-folder/svg-template/svg-template';
import { StopRepeatContent } from './pages/other-folder/stop-repeat-content/stop-repeat-content';
import { ClickOutsideTest } from './pages/other-folder/click-outside-test/click-outside-test';
import { TemplateAnchorLinks } from './pages/other-folder/template-anchor-links/template-anchor-links';

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
        path: 'cdk-components',
        component: CdkComponents,
        data: {
            title: 'cdk',
            showInMenu: true,
        },
        children: [
            {
                path: 'accordion',
                component: Accordion,
                data: {
                    title: 'accordion',
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
                path: 'cdk-modal',
                component: CdkModal,
                data: {
                    title: 'modal',
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
        ]
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
        path: 'other-components',
        component: CdkComponents,
        data: {
            title: 'other',
            showInMenu: true,
        },
        children: [
            {
                path: 'css-variables',
                component: CssVariables,
                data: {
                    title: 'variables',
                    showInMenu: true,
                    group: 'OTHER'
                }
            },
            {
                path: 'show-more-button',
                component: ShowMore,
                data: {
                    title: 'show-more',
                    showInMenu: true,
                    group: 'OTHER'
                }
            },
            {
                path: 'slots',
                component: Slots,
                data: {
                    title: 'slots',
                    showInMenu: true,
                    group: 'OTHER'
                }
            },
            {
                path: 'steps',
                component: StepsByButtons,
                data: {
                    title: 'steps',
                    showInMenu: true,
                    group: 'OTHER'
                }
            },
            {
                path: 'defer-load',
                component: DeferLoading,
                data: {
                    title: '@defer',
                    showInMenu: true,
                    group: 'OTHER'
                }
            },
            {
                path: 'svg',
                component: SvgTemplate,
                data: {
                    title: 'svg',
                    showInMenu: true,
                    group: 'OTHER'
                }
            },
            {
                path: 'stop-repeat-content',
                component: StopRepeatContent,
                data: {
                    title: 'ngTemplateOutlet',
                    showInMenu: true,
                    group: 'OTHER'
                }
            },
            {
                path: 'click-outside-directive',
                component: ClickOutsideTest,
                data: {
                    title: 'click-outside',
                    showInMenu: true,
                    group: 'OTHER'
                }
            },
            {
                path: 'template-anchor-links',
                component: TemplateAnchorLinks,
                data: {
                    title: 'anchor-links',
                    showInMenu: true,
                    group: 'OTHER'
                }
            },
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
