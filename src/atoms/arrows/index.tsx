import { Icon } from "@blueprintjs/core"
import { useMemo } from "react";

interface IArrowsProps {
    readonly length: number;
}

const Arrows = ({ length }: IArrowsProps): JSX.Element => {
    const ArrowComponents: JSX.Element[] = useMemo(() => {
        const arrowComponents: JSX.Element[] = [];

        for (let x = 0; x < length / 2.5; x++) {
            const Arrow = <Icon icon='arrow-left' color='#334D98' />;
            arrowComponents.push(Arrow);
        }

        return arrowComponents;
    }, [length]);

    return (
        <div>
            {ArrowComponents}
        </div>
    );
}

export default Arrows;
