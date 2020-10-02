import React from 'react';


const SelectMenu: React.FC<SelectMenuProps> = (props) => {
    let tags = props.tags.map(tag => {
        return (
            <option key={tag.id} value={tag.name}>{tag.name}</option>
        );
    });

    return (
        <React.Fragment>
            <option value="">Select a tag...</option>
            {tags}
        </React.Fragment>
    );
};

interface SelectMenuProps {
    tags: Tag[];
}


interface Tag {
    id: number;
    name: string;
}



export default SelectMenu;

