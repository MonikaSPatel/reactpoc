import styled from 'styled-components';

export const Input = styled.input.attrs(props => ({
  type: props.type || "text",
  size: props.size || "1em",
}))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

export const InlineDiv = styled.div`
display:inline-block;
`;
export const Column = styled.div`
display:block;
`;

export const Span = styled.span`
display:inline-block;
width:150px;
text-align:left;
`;

export const Error = styled.div`
display:block;
width:65%;
text-align:right;
`;

export const Section = styled.section`
margin-left: 1em;
margin-right: 1em;
background:#ead7ea;
border: 2px solid #ead7ea;
`;
export const BodySection = styled.section`
margin-left: 1em;
margin-right: 1em;
text-align:center;
background:#white;
border: 2px solid #ead7ea;
`;

export const Tab = styled.div`
display:inline-block;
background: ${props => props.isSelected ? "palevioletred" : "white"};
color: ${props => props.isSelected ? "white" : "palevioletred"};
font-size: 1em;
width:200px;
padding: 0.25em 1em;
border: 2px solid #ead7ea;
`;

export const Select = styled.select.attrs(props => ({
  type: props.type,
  size: props.size || "1.5em",
}))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;


export const Lable = styled.label.attrs(props => ({
  size: props.size || "1em",
}))`
    color: palevioletred;
    font-size: 1em;
    text-align:left;
    width: 150px;
    display: inline-block;
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

