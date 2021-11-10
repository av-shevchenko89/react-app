import { Multiselect } from 'multiselect-react-dropdown';
import React from 'react';
import { GenreOptions } from '../../constants';

interface Props {
    genres: string[];
    onChange: (options: string[]) => void;
}

export function GenreSelect({ genres, onChange }: Props) {
    return (
        <Multiselect
            isObject={false}
            displayValue="label"
            selectedValues={genres}
            onSelect={onChange}
            onRemove={onChange}
            options={GenreOptions}
            placeholder="Select Genre"
            style={{
                chips: {
                    background: '#555',
                    textTransform: 'capitalize'
                },
                multiselectContainer: {
                    color: '#424242',
                    textTransform: 'capitalize'
                },
                searchBox: {
                    height: '50px',
                    background: 'rgba(50, 50, 50, 0.8)',
                    border: 'none',
                    padding: '0 20px',
                    lineHeight: '50px',
                    verticalAlign: 'middle',
                    overflow: 'hidden'
                }
            }}
            showCheckbox
        />
    )
}
