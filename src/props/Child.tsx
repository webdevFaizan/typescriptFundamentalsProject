import React from 'react';
interface ChildProps {
    color: string;
}

const Child: React.FC<ChildProps> = ( {color} : ChildProps) => {
    return (
        <div>
            Hi There + {color}
        </div>
    )
}

export { Child };