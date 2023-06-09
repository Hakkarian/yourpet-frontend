const { css } = require("@emotion/react");

const bordered = (color) => css`
    border: 1px solid ${color};
    outline: none;
`
const flex = (alignItems, jContent) => css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${jContent};
`;

const wrapper = (gap, wrap) => css`
    display: flex;
    flex-wrap: ${wrap};
    gap: ${gap};
`

const font = (fs, lh, fw, ls, color) => css`
    font-size: ${fs};
    line-height: ${lh};
    font-weight: ${fw};
    letter-spacing: ${ls};
    color: ${color};
` 

const color = (color, bgColor) => css`
    color: ${color};
    background-color: ${bgColor};
`
const background = (repeat, position, size) => css`
    background-repeat: ${repeat};
    background-position: ${position};
    background-size: ${size};
`

const retina = (image) => css`
 @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image:
            url(${image});
        }

`

export { background, color, font, flex, wrapper, bordered, retina };

// @mixin retina {
//     @media (min-device-pixel-ratio: 2),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//         @content;
//     }
// }

