import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';
import { adsCreativeWork } from '../../database/data';
import AdsCard from '../../components/adsCard/AdsCard';

const Wrapper = styled.div`
  background-color: #000;
  padding: 20px;
  min-height: 100vh;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* 1 ảnh trên mobile */
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 3 ảnh trên desktop */
  }
`;

const Item = styled.div`
  text-align: center;
  color: #fff;
`;

const Title = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
`;

const AdsCreativeWorkGallery = ({ components }) => {
  return (
    <Wrapper>
        {/* <div style={{marginTop: '5rem ', display: 'flex'}}>
            <AdsCard />
            <span style={{color: '#fff', fontSize: '20px', marginLeft: '-50rem'}}>Welcome to all my Advertising Creative Work!</span>
        </div> */}

      <Grid>
        {components.map((item, index) => (
          <Item key={index}>
            <Image
              src={item.image}
              alt={item.title}
              width="100%"
              height="auto"
              preview={false}
              style={{ borderRadius: '10px' }}
            />
            <Title>{item.title}</Title>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

const AdsCreativeWork = () => {
    return <AdsCreativeWorkGallery components={adsCreativeWork} />
}

export default AdsCreativeWork;
