import React from 'react'
import { usePostQuery } from '../hooks/usePost'
import axios from 'axios'
import { useQueries } from '@tanstack/react-query'

//staleTime => 설정한 시간만큼 fresh 상태를 유지하여 api호출을 통제함
//refetchOnMount => boolean으로 true는 매번 호출, false는 한번만 호출
//refetch 버튼을 눌렀을 때만 api를 호출함
//enabled refetch하기 전까지 api를 호출하지 않음

//디테일 데이터 불러오기
//detail 정보는 아래 fetchPost에 queryData에서 불러온다.

const ReactQueryPage = () => {
  // const { data, isLoading, refetch, isError, error } = usePostQuery()
  
  // if (isLoading) {
  //   return <h1>Loading...</h1>
  // }
  // if (isError) {
  //   return <h1>{error.message}</h1>
  // }
  // return(
  // <div>
  //     {data?.map((item, index) => (
  //     <div key={index}>{item.title} </div>
  //     ))}
  //     <button onClick={refetch} >api호출하기</button>
  // </div>
  //   )

  const ids = [1,2,3,4]

  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`)
  }

  const result = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: ()=>fetchPostDetail(id)
      }
    }),
    combine: (result) => {
      return {
        data:result.map((result)=>result.data)
      }
    }
  })
  console.log("result임", result);
  console.log(result?.data[0]);
  return <div>
  </div>

}

export default ReactQueryPage  