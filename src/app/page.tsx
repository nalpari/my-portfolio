export default function Home() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요! 저는 Devgrr 입니다.
            <br className="hidden lg:inline-block" />
            오늘도 열심히 코딩하고 있어요.
          </h1>
          <p className="mb-8 leading-relaxed">
            대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 국회에서
            의결된 법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다. 이
            헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의
            규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다. 광물 기타
            중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은
            법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을
            특허할 수 있다.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}
