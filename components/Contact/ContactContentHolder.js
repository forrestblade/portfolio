import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const ContentWrapper = styled.span`
    h2 {
        font-size: 50px;
        margin: 0px 0px 30px;
        font-family: ${({ theme }) => {
            return theme.calibre;
        }};
        font-weight: ${({ theme }) => {
            return theme.semibold;
        }};
        color: ${({ theme }) => {
            return theme.headWhite;
        }};
    }

    div {
        p {
            margin: 0px 0px 15px;
            font-size: 20px;
            line-height: 1.3;
            font-weight: medium;
            color: ${({ theme }) => {
                return theme.skyBlue;
            }};
        }
    }

    a {
        margin-top: 50px;
    }
`;

const ContactContentHolder = ({ data: { attributes, html } }) => {
    const { title, mailText } = attributes;
    return (
        <ContentWrapper>
            <h2 className="wow fadeInUp">{title}</h2>
            <div className="wow fadeInUp">{parse(html)}</div>
            <a class="button__main wow fadeInUp" href="mailto:forrestblade.code@gmail.com">lets collab</a>
        </ContentWrapper>
    );
};

export default ContactContentHolder;
