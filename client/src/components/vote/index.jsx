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

          <div className="mt-8 border-gray border-b">
            <SubTitle
              className={`w-[100%]  max-w-[600px]`}
              content={`Proposals strictly to strengthen security of the network`}
            />
          </div>

          <div className="flex flex-col mt-3">
            <div class="w-fit mb-2 flex items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-6 h-6 text-laurel bg-white rounded"
              />
              <label
                for="bordered-checkbox-1"
                class="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Big bounty
              </label>
            </div>
            <div class="w-fit flex items-center">
              <input
                id="bordered-checkbox-2"
                type="checkbox"
                value=""
                name="bordered-checkbox-2"
                className="w-6 h-6 text-blue-600 bg-gray-100 rounded"
              />
              <label
                for="bordered-checkbox-2"
                class="py-2 ml-2 w-full text-sm font-medium text-gray-900"
              >
                File law suit
              </label>
            </div>
          </div>
        </div>
      </Aside>
    </Section>
  );
}

export default VoteContainer;
