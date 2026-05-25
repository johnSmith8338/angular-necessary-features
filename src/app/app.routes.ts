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

export const routes: Routes = [
    {
        path: '',
        component: ShowMore,
        data: {
            title: 'show-more',
            showInMenu: true,
        }
    },
    {
        path: 'slots',
        component: Slots,
        data: {
            title: 'slots',
            showInMenu: true,
        }
    },
    {
        path: 'steps',
        component: StepsByButtons,
        data: {
            title: 'steps',
            showInMenu: true,
        }
    },
    {
        path: 'defer-load',
        component: DeferLoading,
        data: {
            title: '@defer',
            showInMenu: true,
        }
    },
    {
        path: 'svg',
        component: SvgTemplate,
        data: {
            title: 'svg',
            showInMenu: true,
        }
    },
    {
        path: 'stop-repeat-content',
        component: StopRepeatContent,
        data: {
            title: 'ngTemplateOutlet',
            showInMenu: true,
        }
    },
    {
        path: 'click-outside-directive',
        component: ClickOutsideTest,
        data: {
            title: 'click-outside',
            showInMenu: true,
        }
    },
    {
        path: 'drag-drop-list',
        component: DragDropList,
        data: {
            title: 'drag-drop',
            showInMenu: true,
        }
    },
    {
        path: 'drag-to-resize',
        component: DragResize,
        data: {
            title: 'drag-resize',
            showInMenu: true,
        }
    },
    {
        path: 'cdk-modal',
        component: CdkModal,
        data: {
            title: 'modal',
            showInMenu: true,
        }
    },
    {
        path: 'copy-to-clipboard',
        component: CopyToClipboard,
        data: {
            title: 'copy',
            showInMenu: true,
        }
    },
    {
        path: 'accordion',
        component: Accordion,
        data: {
            title: 'accordion',
            showInMenu: true,
        }
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
