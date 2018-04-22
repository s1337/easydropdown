import Dom                 from '../Renderer/Dom';
import handleBodyClick     from './Handlers/handleBodyClick';
import handleHeadClick     from './Handlers/handleHeadClick';
import handleHeadMousedown from './Handlers/handleHeadMousedown';
import handleHeadMouseup   from './Handlers/handleHeadMouseup';
import handleSelectBlur    from './Handlers/handleSelectBlur';
import handleSelectChange  from './Handlers/handleSelectChange';
import handleSelectFocus   from './Handlers/handleSelectFocus';
import handleSelectKeydown from './Handlers/handleSelectKeydown';
import handleSelectKeyup   from './Handlers/handleSelectKeyup';
import IEventBinding       from './Interfaces/IEventBinding';

const getEventsList = (dom: Dom): IEventBinding[] => [
    {
        target: dom.head,
        type: 'click',
        handler: handleHeadClick
    },
    {
        target: dom.head,
        type: 'mousedown',
        handler: handleHeadMousedown
    },
    {
        target: dom.head,
        type: 'mouseup',
        handler: handleHeadMouseup
    },
    {
        target: document.body,
        type: 'click',
        handler: handleBodyClick
    },
    {
        target: dom.select,
        type: 'change',
        handler: handleSelectChange
    },
    {
        target: dom.select,
        type: 'keydown',
        handler: handleSelectKeydown
    },
    {
        target: dom.select,
        type: 'keyup',
        handler: handleSelectKeyup
    },
    {
        target: dom.select,
        type: 'focus',
        handler: handleSelectFocus
    },
    {
        target: dom.select,
        type: 'blur',
        handler: handleSelectBlur
    }
];

export default getEventsList;