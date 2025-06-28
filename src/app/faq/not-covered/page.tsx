import BlogItem from '@/components/BlogItem';
export default function BlogPage() {
  const tableWrapperStyle = 'flex items-center text-body-m flex-col lg:flex-row lg:flex-nowrap md:text-body-l mb-40';
  const thStyle =
    'mb-20 lg:mb-0 w-[30%] lg:w-[300px] flex justify-center items-center align-middle font-semibold text-primary';

  const itemsWrapperStyle = 'flex w-full md:w-fit';
  const cellColumnStyle = 'w-1/2 md:w-fit';
  const renderCell = (cellItemArr: string[]) => {
    return cellItemArr.map((item, index) => (
      <div
        key={`${item}-${index}`}
        className={`py-8 text-center md:w-[300px] md:py-12 ${index === 0 ? 'border-y' : 'border-b'}`}
      >
        {item}
      </div>
    ));
  };

  return (
    <BlogItem
      isFAQ
      title="비급여 수가 (의원)"
      date=""
      content={
        <>
          <section className={tableWrapperStyle}>
            <div className={thStyle}>제증명서류</div>
            <div className={itemsWrapperStyle}>
              <div className={cellColumnStyle}>{renderCell(['진료확인서', '통원확인서', '의무기록사본(장당)'])}</div>
              <div className={cellColumnStyle}>{renderCell(['3,000원', '3,000원', '1,000원'])}</div>
            </div>
          </section>
          <section className={tableWrapperStyle}>
            <div className={thStyle}>진단서</div>
            <div className={itemsWrapperStyle}>
              <div className={cellColumnStyle}>
                {renderCell(['일반진단서', '영문진단서', '장애진단서', '근로능력평가용 진단서', '병무용진단서'])}
              </div>
              <div className={cellColumnStyle}>
                {renderCell(['20,000원', '40,000원', '50,000원', '10,000원', '20,000원'])}
              </div>
            </div>
          </section>
          <section className={tableWrapperStyle}>
            <div className={thStyle}>행위료</div>
            <div className={itemsWrapperStyle}>
              <div className={cellColumnStyle}>
                {renderCell([
                  'dTMS3000(자기자극술)',
                  'dTMS5000(자기자극술)',
                  'dTMS6000(자기자극술)',
                  'tDCS(직류자극술)',
                ])}
              </div>
              <div className={cellColumnStyle}>{renderCell(['100,000원', '150,000원', '200,000원', '50,000원'])}</div>
            </div>
          </section>
          <section className={tableWrapperStyle}>
            <div className={thStyle}>검사료</div>
            <div className={itemsWrapperStyle}>
              <div className={cellColumnStyle}>{renderCell(['HRV(자율신경계검사)', 'RDS&TCI(기질 및 성격검사)'])}</div>
              <div className={cellColumnStyle}>{renderCell(['50,000원', '50,000원'])}</div>
            </div>
          </section>
        </>
      }
    />
  );
}
