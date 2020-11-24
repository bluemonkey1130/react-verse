import styled from 'styled-components'

const handleRowWidth = (width) => {
    switch (width) {
        case "standard":
            return 'grid-column-start: 3;' +
                'grid-column-end: 13;'
        case "align-wide":
            return 'grid-column-start: 2;' +
                'grid-column-end: 14;'
        case "align-full":
            return 'grid-column-start: 1;' +
                'grid-column-end: 15;'
        default:
            return 'grid-column-start: 3;' +
                'grid-column-end: 13;'
    }
}
const handleColumnStart = (colStart) => {
    switch (colStart) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return colStart
        default:
            return 'auto'
    }
}
const handleRowStart = (rowStart) => {
    switch (rowStart) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return rowStart
        default:
            return 'auto'
    }
}
const handleRowSpan = (rowSpan) => {
    switch (rowSpan) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return 'span ' + rowSpan
        default:
            return 'auto'
    }
}

const handleColumnSpan = (colSpan) => {
    switch (colSpan) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return 'span ' + colSpan
        default:
            return 'span ' + 12
    }
}

export const Grid = styled.article`
    align-items: stretch;
    display: grid;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-columns: [full-start] minmax(calc(calc(100% - 1500px) / 2), 1fr) [main-start] repeat(12, [col-start] 1fr) [main-end] minmax(calc(calc(100% - 1500px) / 2), 1fr) [full-end];
    grid-template-rows: auto;
    // grid-row-gap:2rem;
    margin: 0 auto;
`

export const Row = styled.section`
    ${({width}) => handleRowWidth(width)};
    align-content: ${(props) => props.align ? props.align : 'unset'};
    align-items: stretch;
    display: grid;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(min-content, max-content);
    grid-gap: ${(props) => props.gridGap ? props.gridGap : '2'}rem;
    grid-row: auto;
    grid-template-columns: repeat(12, 1fr);
`

export const Block = styled.div`
    align-items: stretch;
    display: inherit;
    grid-auto-flow: dense;
    grid-column: ${({colStart}) => handleColumnStart(colStart)} /  ${({colSpan}) => handleColumnSpan(colSpan)};
    grid-row: ${({rowStart}) => handleRowStart(rowStart)} /  ${({rowSpan}) => handleRowSpan(rowSpan)};
`