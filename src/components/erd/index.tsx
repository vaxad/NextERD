"use client"
import { addEdge, Background, BackgroundVariant, MiniMap, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import EntityNode, { EntityNodeProps } from './entity-node';
import RelationEdge, { RelationEdgeProps } from './relation-edge';
import Toolbar from './toolbar';
import DownloadButton from './download-button';

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
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (params: any) => setEdges((eds) => addEdge({ ...params, type: "relation", data: { type: "1-m" } }, eds)),
        [setEdges],
    )

    return (
        <div className='relative w-full flex-grow h-[calc(100vh-56px)] rounded'>
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
                <DownloadButton />
                <Toolbar />
                <MiniMap />
            </ReactFlow>
        </div>
    )
}
