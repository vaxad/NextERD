import React from 'react';
import {
    Panel,
    ReactFlowState,
    useReactFlow,
    useStore,
    useStoreApi,
} from '@xyflow/react';
import { Button } from '@/components/ui/button';
import { Lock, PlusIcon, Unlock, ZoomIn, ZoomOut } from 'lucide-react';
import { EntityNodeProps } from './entity-node';
import { shallow } from 'zustand/shallow';
import { AspectRatioIcon } from '@radix-ui/react-icons';

const selector = (s: ReactFlowState) => ({
    isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
    minZoomReached: s.transform[2] <= s.minZoom,
    maxZoomReached: s.transform[2] >= s.maxZoom,
});


function Toolbar() {
    const { setNodes, zoomIn, zoomOut, fitView } = useReactFlow();
    const store = useStoreApi();
    const { isInteractive, minZoomReached, maxZoomReached } = useStore(selector, shallow);

    const createNode = () => {
        setNodes((nodes) => {
            return [
                ...nodes,
                {
                    id: (parseInt(nodes[nodes.length - 1]?.id || '0') + 1).toString(),
                    type: 'entity',
                    data: { name: '', attributes: [{ name: "", type: "string" }], open: true },
                    position: { x: (nodes[nodes.length - 1]?.position.x || 10) + 300, y: nodes[nodes.length - 1]?.position.y || 10 },
                } as EntityNodeProps,
            ];
        });
    }

    const onToggleInteractivity = () => {
        store.setState({
            nodesDraggable: !isInteractive,
            nodesConnectable: !isInteractive,
            elementsSelectable: !isInteractive,
        });
    };

    const onZoomInHandler = () => {
        zoomIn();
    };

    const onZoomOutHandler = () => {
        zoomOut();
    };

    const onFitViewHandler = () => {
        fitView({
            padding: 0.1,
        });
    };

    return (
        <Panel position="bottom-left">
            <div className='flex flex-col md:flex-row gap-0.5'>
                <Button title={isInteractive ? "lock" : "unlock"} onClick={onToggleInteractivity}>
                    {isInteractive ? <Lock size={20} /> : <Unlock size={20} />}
                </Button>
                <Button title='zoom-in' onClick={onZoomInHandler} disabled={maxZoomReached}>
                    <ZoomIn size={20} />
                </Button>
                <Button title='add-entity' onClick={createNode}>
                    <PlusIcon size={20} />
                </Button>
                <Button title='zoom-out' onClick={onZoomOutHandler} disabled={minZoomReached}>
                    <ZoomOut size={20} />
                </Button>
                <Button title='fit-view' onClick={onFitViewHandler}>
                    <AspectRatioIcon width={20} height={20} />
                </Button>
            </div>
        </Panel>
    );
}

export default Toolbar;