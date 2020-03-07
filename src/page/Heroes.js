import React, {useEffect, useState} from 'react';
import axios from 'axios';
export const Heroes = (props) => {

  const [heroes, setHeroes] = useState([]);
  //componentDidMount = useEffect 같은동작
  // useEffect는 계속 동작함
  //두번쨰 파라메터에 빈배열을 넣으면 componentDidMount와 같이 최초에 한번만 실행
  useEffect(()=>{
    getHeroes();

  },[])

  // async를 함수 앞에 붙이면 비동기함수가 된다.
  // async를 붙이기 위해서는 반드시 내부에 await가 있어야 한다.
  // await 뒤에는 반드시 Promise가 와야한다.
  // await는 Promise를 실행하고 결과를 기다렸다가 리턴한다.
  const getHeroes = async () =>{
    console.log('rendered');
    const host = 'http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000';
    const protocol = '/api/user/heroes';
    const response = await axios.get(`${host}${protocol}`);
    console.log(response);
    //response.data.data
    setHeroes(response.data.data);
  }
  return (
    <div className="row">
      {heroes.map(hero => (
        <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.id}>
          <div className="card">
            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/face-24px.svg'}
                 style={{width: '100%'}} alt={hero.name}></img>
            <div className="card-body">
              <h5 className="card-title">{hero.name}</h5>
              <p className="card-text">email: {hero.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}