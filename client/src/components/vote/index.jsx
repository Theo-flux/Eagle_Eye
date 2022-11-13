import { Section, Aside, H3, SubTitle } from '../../shared';

function VoteContainer() {
  return (
    <Section className={`h-screen overflow-hidden w-[100%] bg-gray`}>
      <Aside>
        <div className="py-4">
          <div className="border-gray border-b">
            <H3
              className={`w-[100%] max-w-[500px]`}
              content={`On- Chain voting on community treasury by token holders`}
            />
          </div>

          <div className="mt-6 border-gray border-b">
            <SubTitle
              className={`w-[100%]  max-w-[500px]`}
              content={`Proposals strictly to strengthen security of the network`}
            />
          </div>
        </div>
      </Aside>
    </Section>
  );
}

export default VoteContainer;
