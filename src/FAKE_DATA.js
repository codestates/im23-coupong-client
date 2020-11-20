const FAKE_DATA = {
  id: '3',
  name: '우준',
  email: 'woojun@test.com',
  login_type: 'local',
  coupon_data: [{
    group_id: 1,
    coupon_cnt: 2,
    data: [
      {
        no: 1,
        title: '첫번째 쿠폰(2개짜리)',
        start_date: '2020-11-03',
        end_date: '2020-11-18'
      },
      {
        no: 2,
        title: '두번째 쿠폰',
        start_date: '2020-11-01',
        end_date: '2020-11-18'
      }
    ]
  },
  {
    group_id: 2,
    coupon_cnt: 3,
    data: [
      {
        no: 1,
        title: '첫번째 쿠폰(3개짜리)',
        start_date: '2020-11-03',
        end_date: '2020-11-18'
      },
      {
        no: 2,
        title: '두번째 쿠폰',
        start_date: '2020-11-01',
        end_date: '2020-11-18'
      },
      {
        no: 3,
        title: '세번째쿠폰',
        start_date: '2020-11-01',
        end_date: '2020-11-18'
      }
    ]
  }]
}
export default FAKE_DATA;