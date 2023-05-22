import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useMemo} from "react";
import { nanoid } from "nanoid";

import { selectUser, selectIsRegistered } from 'redux/auth/auth-selector';
import { info } from 'redux/auth/auth-operations';
import {Edit, EditButton, Input, ItemWrap, Wrapper, Label, InputWrap, Span, CheckIcon} from './UserDataItem.styled';

const initialState ={
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: ''
};

const UserDataItem = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const {name, email, phone, birthday, city} = user;
  const isRegister = useSelector(selectIsRegistered);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState(initialState);
  const id = useMemo(() => nanoid(), []);

  useEffect(() => {
     if(isRegister) {
        const userName = email.split("@")[0];
        setData({...data, name: userName});
     }
  }, []);

    const onEditBtn = () => {
     setIsEdit(true);
    };

    const  handleNameSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const userName = form.elements.name.value;
 
      dispatch(info({name: userName}));
      };

      const handleEmailSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userEmail = form.elements.email.value;

        dispatch(info({email: userEmail}));
      };

      const handleBirthdaySubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userBirthday = form.elements.birthday.value;

        dispatch(info({birthday: userBirthday}));
      };

      const handlePhoneSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userPhone = form.elements.phone.value;

        dispatch(info({phone: userPhone}));
      };

      const handleCitySubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userCity = form.elements.city.value;

        dispatch(info({city: userCity}));
      };
 
    return (
    <Wrapper>
    <ItemWrap onSubmit={handleNameSubmit}><InputWrap><Span>Name: </Span><Label htmlFor={id}></Label>
    {!isEdit && (<><EditButton type='button' onClick={onEditBtn}><Edit /></EditButton><Input readOnly defaultValue={name}/> </>)} 
    {isEdit && (
      <>
       <EditButton type='submit' ><CheckIcon /></EditButton>
       <Input 
       type='text' 
       defaultValue={name}
       name="name" id={id}   
       pattern="[A-Za-z]{1,32}"/>
      </>
    )}
    </InputWrap></ItemWrap>
     
    <ItemWrap onSubmit={handleEmailSubmit}><InputWrap><Span>Email: </Span><Label htmlFor={id}></Label>
    {!isEdit && (<><EditButton type='button' onClick={onEditBtn}><Edit /></EditButton> <Input readOnly defaultValue={email}/></>)}
     {isEdit && (<>
      <EditButton type='submit' ><CheckIcon /></EditButton>
      <Input 
     type='email' 
     defaultValue={email}
     name='email' id={id} 
     pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"/>
     </>)}
     </InputWrap></ItemWrap>
     
    <ItemWrap onSubmit={handleBirthdaySubmit}><InputWrap><Span>Birthday: </Span><Label htmlFor={id}></Label>
    {!isEdit && (<><EditButton type='button' onClick={onEditBtn}><Edit /></EditButton><Input readOnly defaultValue={birthday}/></>)}
    {isEdit && (<>
      <EditButton type='submit' ><CheckIcon /></EditButton>
     <Input type='text' name='birthday' id={id} 
     defaultValue={birthday}
     placeholder="DD.MM.YYYY"
     dateFormat="dd.MM.yyyy"
     pattern="(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)"/></>)}
     </InputWrap></ItemWrap>

    <ItemWrap onSubmit={handlePhoneSubmit}><InputWrap><Span>Phone: </Span><Label htmlFor={id}></Label>
    {!isEdit && (<><EditButton type='button'><Edit onClick={onEditBtn}/></EditButton><Input readOnly defaultValue={phone} /></>)}
     {isEdit && (<>
      <EditButton type='submit' ><CheckIcon /></EditButton>
     <Input type='phone' name="phone" id={id} 
       defaultValue={phone}
       pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
       minlength="12"
       maxlength="12"
       placeholder="+380XXXXXXXXX"  /></>)}
       </InputWrap></ItemWrap>
     
    <ItemWrap><InputWrap onSubmit={handleCitySubmit}><Span>City:</Span><Label htmlFor={id}></Label>
    {!isEdit && (<><EditButton type='button' onClick={onEditBtn}><Edit /></EditButton><Input readOnly defaultValue={city} /></>)}
     {isEdit && (<>
      <EditButton type='submit' ><CheckIcon /></EditButton>
      <Input type='text' name="city" id={id} 
      defaultValue={city}
      pattern="/([A-Za-z]+(?: [A-Za-z]+)*)/"
      placeholder='Kyiv'/>
     </>)}
      </InputWrap></ItemWrap>
    </Wrapper>
    );
};

export default UserDataItem;