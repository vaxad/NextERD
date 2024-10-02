import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { relationTypes } from '@/lib/constants';
import { BaseEdge, Edge, EdgeLabelRenderer, EdgeProps, getBezierPath, useReactFlow } from '@xyflow/react';
import { Trash } from 'lucide-react';
import React from 'react';

export type RelationEdgeProps = Edge<{
    type: "1-?1" | "1-m" | "m-1" | "1?-1";
},
    'relation'
>;
export default function RelationEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    data,
}: EdgeProps<RelationEdgeProps>) {

    const { setEdges } = useReactFlow()
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const deleteEdge = () => {
        setEdges((edges) => edges.filter((edge) => edge.id !== id));
    };

    const onValueChange = (value: string) => {
        setEdges((edges) => edges.map((edge) => edge.id === id ? { ...edge, data: { ...edge.data, type: value } } : edge));
    }

    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
            <EdgeLabelRenderer>
                <div
                    style={{
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    }}
                    className="nodrag nopan absolute pointer-events-auto flex border-foreground border bg-background rounded p-1 gap-1"
                >
                    <Select value={String(data?.type)} defaultValue={relationTypes[0]} onValueChange={onValueChange}  >
                        <SelectTrigger>
                            {data?.type}
                        </SelectTrigger>
                        <SelectContent>
                            {relationTypes.map((relType, idx) =>
                                (<SelectItem key={`relation-type-select-${idx}`} value={String(relType)}>{String(relType)}</SelectItem>))}
                        </SelectContent>
                    </Select>
                    <Button variant="destructive" className='aspect-square' onClick={deleteEdge}>
                        <Trash />
                    </Button>
                </div>
            </EdgeLabelRenderer>
        </>
    );
}