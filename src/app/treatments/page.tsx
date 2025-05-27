import Image from 'next/image';
export default function Treatments() {
  return (
    <div className="gradient-background-main flex flex-col items-center">
      <article className="mt-[180px] flex w-1200 flex-col items-center rounded-lg bg-white pt-40">
        <h3 className="chip">진단과 치료</h3>
        <h2 className="h2 text-primary mt-24">eNIT 진단법</h2>
        <p className="text-body-l mt-8 mb-40 text-center font-medium">
          사람마다 다른 고유한 뇌의 data와 신경생리학적 검사 정보를 기반으로
          <br />
          개인화된 맞춤 치료전략을 수립하는 것이 eNIT의 핵심입니다.
        </p>
        {/* Section 1-0: Figure */}
        <div className="gradient-background mb-40 flex w-1080 flex-col items-center rounded-lg">
          <Image width={680} height={680} src="/network.png" alt="hi" />
          <div className="absolute flex h-[680px] w-1080 items-center justify-center">
            <div className="flex">
              <div className="mr-[100px] flex h-fit w-[440px] flex-col items-center rounded-lg bg-[rgba(255,255,255,0.7)] p-24 shadow-md backdrop-blur-xs">
                <h4 className="text-body-xl font-bold">진단</h4>
                <div className="mt-20 flex h-[196px] w-full items-center justify-center">
                  <Image src="/brain.svg" width={140} height={140} alt="brain logo" />
                  <div className="chip absolute top-[100px] left-40">선별검사</div>
                  <div className="chip absolute top-80 left-[200px]">HRV</div>
                  <div className="chip absolute top-[172px] left-80">TCI</div>
                  <div className="chip absolute top-[146px] left-[300px]">qEEG</div>
                  <div className="chip absolute top-[224px] left-[200px]">CPT</div>
                </div>
                <div className="mt-24 w-full">
                  <h5 className="text-body-l mb-12 font-medium">뇌신경 생리학 검사</h5>
                  <ul className="text-body-s ml-24 w-[368px] list-outside list-disc break-keep">
                    <li>5가지 뇌신경생리학 관련 data를 기반으로 증상의 원인 및 치료 전략을 통합적으로 수립</li>
                    <li>
                      정량뇌파(qEEG)검사결과를 토대로 개별적인 고유한 뇌 뉴런들간의 물리적 network를 분석하고, 뇌 위치에
                      따른 뇌파분석을 하여 기능적 이상유무를 진단
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-[140px] flex h-fit w-[440px] flex-col items-center rounded-lg bg-[rgba(255,255,255,0.7)] p-24 shadow-md backdrop-blur-xs">
                <h4 className="text-body-xl font-bold">치료</h4>
                <div className="mt-20 flex h-[196px] w-full items-center justify-center">
                  <Image src="/lightning.svg" width={116} height={116} alt="lightning logo" />
                  <div className="chip absolute top-[100px] left-[68px]">dTMS</div>
                  <div className="chip absolute top-[90px] left-[268px]">tDCS</div>
                  <div className="chip absolute top-[188px] left-40">
                    Aripiprazole
                    <br />
                    Bupropion
                  </div>
                  <div className="chip absolute top-[180px] left-[220px]">SSRIs, SNRIs</div>
                </div>
                <div className="mt-24 w-full">
                  <h5 className="text-body-l mb-12 font-medium">통합 치료</h5>
                  <ul className="text-body-s ml-24 w-[368px] list-outside list-disc break-keep">
                    <li>
                      진단명과 상관없이 뇌신경의 생물학적 data를 기반으로 뇌 호르몬과 네트워크의 기능적 이상 유무를
                      증상과 관련하여 분석, 치료 전략을 수립
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <section className="mt-[180px] flex w-1200 flex-col items-center rounded-lg bg-white pt-40">
        <h3 className="chip">진단에 쓰이는 기술</h3>
        <h2 className="h2 text-primary mt-24">정량뇌파검사(qEEG)</h2>
        <p className="text-body-l mt-8 mb-40 text-center font-bold">
          보다 과학적, 보다 객관적 치료를 위한 qEEG 정량뇌파
        </p>
        <p className="text-body-l mt-8 mb-40 w-1080 text-center font-medium break-keep">
          최신 장비를 통해 뇌파를 측정하고 이를 의료용 소프트웨어인 뉴로가이드로 (Neuroguide; Applied Neuroscience,
          Inc., Largo, FL, USA{' '}
          <a href="https://appliedneuroscience.com/neuroguide/">https://appliedneuroscience.com/neuroguide/</a> )
          변환하여 뇌파의 불균형 여부를 쉽게 확인할 수 있는 검사입니다. 이 검사를 통해 뇌의 건강상태를 평가할 수 있으며
          치료약물 선택에 참고를 하며, 뉴료모듈레이션(deepTMS, rTMS, tDCS)등의 시술에 중요한 근거자료가 됩니다. 또한
          증상의 호전 및 치료효과 판정에도 유용합니다. 이 검사를 통해 보다 과학적이며 객관적인 치료를 할 수 있습니다.
        </p>
        {/* Section 1-0: Figure */}
      </section>
    </div>
  );
}
