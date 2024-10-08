import React from 'react';
import {
    Panel,
    useReactFlow,
    getNodesBounds,
    getViewportForBounds,
} from '@xyflow/react';
import { toPng } from 'html-to-image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { placeholderData } from '@/lib/constants';

function downloadImage(dataUrl: string) {
    const a = document.createElement('a');

    a.setAttribute('download', 'next-erd.png');
    a.setAttribute('href', dataUrl);
    a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

function DownloadButton() {
    const { getNodes, setEdges, setNodes } = useReactFlow();
    const onClick = () => {
        const nodesBounds = getNodesBounds(getNodes());
        const viewport = getViewportForBounds(
            nodesBounds,
            imageWidth,
            imageHeight,
            0.5,
            2,
            0.1
        );

        const reactFlow = document.querySelector('.react-flow__viewport') as HTMLElement | undefined

        if (!reactFlow) return
        toPng((reactFlow), {
            backgroundColor: 'transparent',
            width: imageWidth,
            height: imageHeight,
            style: {
                width: String(imageWidth),
                height: String(imageHeight),
                transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
            },
        }).then(downloadImage);
    };

    function onUseExample() {
        const nodes = placeholderData.entities.map((entity, index) => ({
            id: `${index}`,
            position: { x: 10 + index * 500, y: 10 + index * 500 },
            data: { name: entity.name, attributes: entity.attributes, open: true },
            type: 'entity',
        }))
        setNodes(nodes)
        const edges = placeholderData.relations.map((relation, index) => {
            const from = nodes.find((node) => node.data.name === relation.from)
            const to = nodes.find((node) => node.data.name === relation.to)
            if (!from || !to) return
            return {
                id: `${index}`,
                source: from.id,
                target: to.id,
                type: "relation",
                data: { type: relation.type }
            }
        }
        ).filter((edge) => !!edge)
        setEdges(edges)
    }

    return (
        <Panel position="top-right">
            <div className='flex gap-2'>
                <Button title="use-example" onClick={onUseExample}>
                    Use Example
                </Button>
                <Button title="download-image" onClick={onClick}>
                    <Download size={20} />
                </Button>
            </div>
        </Panel>
    );
}

export default DownloadButton;