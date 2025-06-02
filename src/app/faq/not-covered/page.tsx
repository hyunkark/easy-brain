import BlogItem from '@/components/BlogItem';
export default function BlogPage() {
  const tableWrapperStyle = 'flex flex-nowrap text-body-l mb-40';
  const thStyle = 'w-[400px] flex justify-center items-center align-middle font-semibold text-primary';

  const renderCell = (cellItemArr: string[]) => {
    return cellItemArr.map((item, index) => (
      <div key={`${item}-${index}`} className={`w-[400px] py-12 text-center ${index === 0 ? 'border-y' : 'border-b'}`}>
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
            <div>{renderCell(['진료확인서', '통원확인서', '의무기록사본(장당)'])}</div>
            <div>{renderCell(['3,000원', '3,000원', '1,000원'])}</div>
          </section>
          <section className={tableWrapperStyle}>
            <div className={thStyle}>진단서</div>
            <div>{renderCell(['일반진단서', '영문진단서', '장애진단서', '근로능력평가용 진단서', '병무용진단서'])}</div>
            <div>{renderCell(['20,000원', '40,000원', '50,000원', '10,000원', '20,000원'])}</div>
          </section>
          <section className={tableWrapperStyle}>
            <div className={thStyle}>행위료</div>
            <div>
              {renderCell(['dTMS3000(자기자극술)', 'dTMS5000(자기자극술)', 'dTMS6000(자기자극술)', 'tDCS(직류자극술)'])}
            </div>
            <div>{renderCell(['100,000원', '150,000원', '200,000원', '50,000원'])}</div>
          </section>
          <section className={tableWrapperStyle}>
            <div className={thStyle}>검사료</div>
            <div>{renderCell(['HRV(자율신경계검사)'])}</div>
            <div>{renderCell(['50,000원'])}</div>
          </section>
        </>
      }
    />
  );
}
