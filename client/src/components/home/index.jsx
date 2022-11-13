import { Section, Aside } from '../../shared';

const Card = ({ item }) => {
  const { name, address, rating, updated, revierws } = item;
  return (
    <div className="">
      <div className="">
        <h4>{name}</h4>

        <small>{address}</small>
      </div>

      <div className="">
        <div className="">
          <p className=""></p>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

function HomeContainer({ items }) {
  console.log(items);
  return (
    <Section className={`h-screen overflow-hidden w-[100%] bg-white`}>
      <Aside>
        <div className="py-4">
          <div>
            {items?.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </div>
        </div>
      </Aside>
    </Section>
  );
}

export default HomeContainer;
