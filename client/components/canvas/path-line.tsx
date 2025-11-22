import { Path, Skia } from "@shopify/react-native-skia";

export type Vertext = {
    x: number;
    y: number;
};

export type Edge = {
    v1: Vertext;
    v2: Vertext;
};

export type PathLineProps = {
    edges: Edge[];
    color?: string;
    strokeWidth?: number;
};

export const PathLine: React.FC<PathLineProps> = ({
    edges,
}) => {
    const path = Skia.Path.Make();

    if (edges.length > 0) {
        // Move to the first edge v1
        path.moveTo(edges[0].v1.x, edges[0].v1.y);

        // Draw each edge: v1 -> v2
        edges.forEach((edge) => {
            path.lineTo(edge.v2.x, edge.v2.y);
        });
    }

    return (
        <Path
            path={path}
            color={"green"}
            style="stroke"
            strokeWidth={10}
        />
    );
};
