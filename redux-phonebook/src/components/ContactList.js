import React, { useEffect, useState } from 'react'
import { SearchBox } from './SearchBox'
import { useSelector } from 'react-redux'
import { ContactItem } from './ContactItem'

export const ContactList = () => {
  const {contactList, keyword} = useSelector((state)=>state)
  const [filterList, setFilterList] = useState([]);

  useEffect(()=>{
    if(keyword !== ""){
      const list = contactList.filter((item)=>item.name.includes(keyword) || item.phoneNum.includes(keyword));
      setFilterList(list)
    }else{
      setFilterList(contactList)
    }
  },[contactList, keyword])
  console.log("키워드",keyword);
  console.log("리스트",contactList);
  return (
    <div>
      <SearchBox/>
      <div className="contact-list">
        num:{filterList.length}
        {filterList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}
