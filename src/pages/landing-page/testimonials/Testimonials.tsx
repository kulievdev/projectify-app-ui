import React, { useState, useEffect } from "react";
import data from "./data";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Typography } from "../../../design-system";

const TestimonialsSection = styled(Layout)``;

const TestimonialsSectionContainer = styled.div`
    text-align: center;
    padding: var(--space-100) 0;
`;

const Header = styled(Typography)`
    margin-bottom: var(--space-50);
`;

const ContentWrapper = styled.div`
    height: 40rem;
    position: relative;
    overflow: hidden;
`;

const Article = styled.article`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;

    &.activeSlide {
        opacity: 1;
        transform: translateX(0);
    }

    &.lastSlide {
        transform: translateX(-100%);
    }

    &.nextSlide {
        transform: translateX(100%);
    }
`;

const Avatar = styled.img`
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: var(--space-20);
    box-shadow: 0 var(--space-6) var(--space-16) rgba(0, 0, 0, 0.2);
`;

const Name = styled(Typography)`
    margin-bottom: var(--space-4);
`;

const Title = styled(Typography)`
    color: var(--jaguar-600);
    margin-bottom: var(--space-32);
`;

const Description = styled(Typography)`
    color: var(--jaguar-700);
    max-width: 60rem;
    margin: 0 auto;
`;

const PrevButton = styled.button`
    position: absolute;
    left: 0;
    top: 20rem;
    transform: translateY(-50%);
    width: 8.4rem;
    height: 8.4rem;
    border: 0.15rem solid var(--jaguar-100);
    border-radius: var(--space-24);
    background-color: var(--white);
    cursor: pointer;
    transition: all 0.3s linear;
`;

const NextButton = styled.button`
    position: absolute;
    right: 0;
    top: 20rem;
    top: 20rem;
    transform: translateY(-50%);
    width: 8.4rem;
    height: 8.4rem;
    border: 0.15rem solid var(--jaguar-100);
    border-radius: var(--space-24);
    background-color: var(--white);
    cursor: pointer;
    transition: all 0.3s linear;
`;

const Testimonials = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <TestimonialsSection>
            <TestimonialsSectionContainer>
                <Header variant="h5" weight="bold">
                    Trust our clients
                </Header>
                <ContentWrapper>
                    {people.map((person, personIdx) => {
                        const { id, image, name, title, description } = person;
                        let position = "nextSlide";
                        if (personIdx === index) {
                            position = "activeSlide";
                        }
                        if (
                            personIdx === index - 1 ||
                            (index === 0 && personIdx === people.length - 1)
                        ) {
                            position = "lastSlide";
                        }
                        return (
                            <Article className={position} key={id}>
                                <Avatar src={image} alt={name} />
                                <Name variant="h6" weight="bold">
                                    {name}
                                </Name>
                                <Title variant="subtitleLG" weight="medium">
                                    {title}
                                </Title>
                                <Description
                                    variant="paragraphMD"
                                    weight="medium"
                                >
                                    {description}
                                </Description>
                            </Article>
                        );
                    })}
                    <PrevButton onClick={() => setIndex(index - 1)}>
                        Prev
                    </PrevButton>
                    <NextButton onClick={() => setIndex(index + 1)}>
                        Next
                    </NextButton>
                </ContentWrapper>
            </TestimonialsSectionContainer>
        </TestimonialsSection>
    );
};

export default Testimonials;
