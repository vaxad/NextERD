"use client"
import { addEdge, Background, BackgroundVariant, ControlButton, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import EntityNode, { EntityNodeProps } from './entity-node';
import { PlusIcon } from 'lucide-react';
import RelationEdge, { RelationEdgeProps } from './relation-edge';

const initialNodes: EntityNodeProps[] = [
    { id: '1', position: { x: 10, y: 10 }, data: { name: '', attributes: [{ name: "", type: "string" }], open: true }, type: 'entity' },
    { id: '2', position: { x: 400, y: 400 }, data: { name: '', attributes: [{ name: "", type: "string" }], open: false }, type: 'entity' },
];
const initialEdges: RelationEdgeProps[] = [{ id: 'e1-2', source: '1', target: '2', type: "relation", data: { type: "1-m" } }];

const edgeTypes = {
    'relation': RelationEdge
};

const nodeTypes = {
    'entity': EntityNode,
};

export default function ErdBoard() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (params: any) => setEdges((eds) => addEdge({ ...params, type: "relation", data: { type: "1-m" } }, eds)),
        [setEdges],
    )

    const createNode = () => {
        setNodes((nodes) => {
            return [
                ...nodes,
                {
                    id: (parseInt(nodes[nodes.length - 1].id) + 1).toString(),
                    type: 'entity',
                    data: { name: '', attributes: [{ name: "", type: "string" }], open: true },
                    position: { x: nodes[nodes.length - 1].position.x + 300, y: nodes[nodes.length - 1].position.y },
                } as EntityNodeProps,
            ];
        });
    }

    return (
        <div className='w-full relative flex-grow h-[calc(100vh-56px)] rounded'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
            >
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                <Controls showZoom={false} orientation='horizontal' position="bottom-center" className='text-black' >
                    <ControlButton title='Add Entity' onClick={createNode}>
                        <PlusIcon size={20} />
                    </ControlButton>
                </Controls>
                <MiniMap />
            </ReactFlow>
        </div>
    )
}
