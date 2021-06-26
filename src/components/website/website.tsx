import React from 'react'
import styled from 'styled-components'

const WebsiteTitle = styled.h2`
    color: {${(props)=> props.theme.colors.primary}};
    text-align: center
`

const Website : React.FC = () => {
    return (
        <>
            <WebsiteTitle>
                Mmemebiz  is underprocess
            </WebsiteTitle>
        </>
    )
}

export  { Website }
