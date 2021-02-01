import React from 'react';

import Hero from 'components/Hero/Hero';
import TextArea from 'components/TextArea/TextArea';
import CardLarge from 'components/Cards/CardLarge/CardLarge';
import CardSquare from 'components/Cards/CardSquare/CardSquare';
import CardBlank from 'components/Cards/CardBlank/CardBlank';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';

const Home = ({ data }) => {
  if (!data) return null;

  let { builder } = data;
  let cardslarge = builder[2].cards_large;

  return (
    <>
      <Hero props={ builder[0] }/>
      <TextArea props={ builder[1] }/>
      <section className="home__section">
        <Container col='2'>
          { cardslarge.map((card, i) => {
            return <CardLarge key={ i } props={card}/>
          }) }
        </Container>
      </section>

      <section className="home__section">
        <Container col='1'>
          <h2 className="home__title">Support Your Community</h2>
        </Container>
        <Container col='3'>
          {/* TODO: this needs to be refactored to only pass in one object like TextArea */}
          <CardSquare
            header='Annual Giving'
            subheader='Preserving our Legacy'
            body='Help to support ongoing classes, virtual programs, international student exchanges, and preserve the Hawaii Okinawa Center.'
            button='LEARN MORE'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSquare
            header='Capital Campaign'
            subheader='Ikuyu Madin'
            body='Although the Plaza is open for business, donations are still needed and greatly appreciated. They will go to the Hawaii United Okinawa Association to support its many cultural programs.'
            button='LEARN MORE'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSquare
            header='Kokua In Kind'
            subheader='Kokua In Kind'
            body='Is a car exchange service that will take your old car and resell it.  Proceeds from the sale less fees will be a donation to HUOA.'
            button='LEARN MORE'
            onClick={() => console.log('You clicked a button')}
          />
        </Container>
      </section>

      <section className="home__section" id="newsletters">
        <Container col='1'>
          <h2 className="home__title">Join Our Newsletter</h2>
        </Container>
        <Container col='2'>
          <CardBlank>
            {/* TODO: refactor this is not how we should be styling inner card elements. They should be styled in the Home.scss file. */}
            <div className='card-blank--subscribe'>
              <h3>Purple Blast</h3>
              <p>Our monthly online newsletter to keep up to date on what's happening in the Hawaii Okinawa community.</p>
              <input className='card-blank--input' type='text' placeholder='Email Address'></input>
              <Button type='filled' onClick={() => console.log('You clicked a button')}>Subscribe</Button>
            </div>
          </CardBlank>
          <CardBlank>
          <div className='card-blank--newsletter'>
              <h3>Uchinanchu Newsletter</h3>
              {/* TODO: we should never do inline styling */}
              <p style={{marginBottom: '24px'}}>Our official bi-monthly newsletter of HUOA, featuring the latest news and events of the organization as well as tidbits on Okinawan cultural activities and performing arts.</p>
              <div style={{width: '100px'}}>
                <Button type='filled' onClick={() => console.log('You clicked a button')}>SIGNUP</Button>
              </div>
            </div>
          </CardBlank>
        </Container>
      </section>
    </>
  );
};

export default Home;
