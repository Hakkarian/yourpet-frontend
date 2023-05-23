import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useMemo} from "react";
import { nanoid } from "nanoid";

import { selectUser } from 'redux/auth/auth-selector';
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
  const [isEditName, setIsEditName] = useState(false);
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditBirthday, setIsEditBirthday] = useState(false);
  const [isEditPhone, setIsEditPhone] = useState(false);
  const [isEditCity, setIsEditCity] = useState(false);
  const [data, setData] = useState(initialState);
  const id = useMemo(() => nanoid(), []);

  const  handleNameSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const userName = form.elements.name.value;
 
      dispatch(info({name: userName}));
      setData({...data, name: userName});
      setIsEditName(false);
    };

      const handleEmailSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userEmail = form.elements.email.value;

        dispatch(info({email: userEmail}));
        setData({...data, email: userEmail});
        setIsEditEmail(false);
      };

      const handleBirthdaySubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userBirthday = form.elements.birthday.value;

        dispatch(info({birthday: userBirthday}));
        setData({...data, birthday: userBirthday});
        setIsEditBirthday(false);
      };

      const handlePhoneSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userPhone = form.elements.phone.value;

        dispatch(info({phone: userPhone}));
        setData({...data, phone: userPhone});
        setIsEditPhone(false);
      };

      const handleCitySubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const userCity = form.elements.city.value;

        dispatch(info({city: userCity}));
        setData({...data, city: userCity});
        setIsEditCity(false);
      };
 
    return (
      <Wrapper>
        <ItemWrap onSubmit={handleNameSubmit}>
          <InputWrap>
            <Span>Name: </Span>
            <Label htmlFor={id}></Label>
            {!isEditName && (
              <>
                <EditButton type="button" onClick={() => setIsEditName(true)} >
                  <Edit />
                </EditButton>
                <Input readOnly defaultValue={data.name || name}  placeholder="Name" />
              </>
            )}
            {isEditName && (
              <>
                <EditButton type="submit">
                  <CheckIcon />
                </EditButton>
                <Input
                  type="text"
                  defaultValue={name}
                  name="name"
                  id={id}
                  placeholder='Name'
                  pattern="[A-Za-z]{1,32}"
                />
              </>
            )}
          </InputWrap>
        </ItemWrap>

        <ItemWrap onSubmit={handleEmailSubmit}>
          <InputWrap>
            <Span>Email: </Span>
            <Label htmlFor={id}></Label>
            {!isEditEmail && (
              <>
                <EditButton type="button" onClick={() => setIsEditEmail(true)}>
                  <Edit />
                </EditButton>
                <Input readOnly defaultValue={data.email || email} placeholder='example@gmail.com'/>
              </>
            )}
            {isEditEmail && (
              <>
                <EditButton type="submit">
                  <CheckIcon />
                </EditButton>
                <Input
                  type="email"
                  defaultValue={email}
                  name="email"
                  id={id}
                  pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                />
              </>
            )}
          </InputWrap>
        </ItemWrap>

        <ItemWrap onSubmit={handleBirthdaySubmit}>
          <InputWrap>
            <Span>Birthday: </Span>
            <Label htmlFor={id}></Label>
            {!isEditBirthday && (
              <>
                <EditButton type="button" onClick={() => setIsEditBirthday(true)}>
                  <Edit />
                </EditButton>
                <Input readOnly defaultValue={data.birthday || birthday} placeholder='DD.MM.YYYY'/>
              </>
            )}
            {isEditBirthday && (
              <>
                <EditButton type="submit">
                  <CheckIcon />
                </EditButton>
                <Input
                  type="text"
                  name="birthday"
                  id={id}
                  defaultValue={birthday}
                  placeholder="DD.MM.YYYY"
                  dateFormat="dd.MM.yyyy"
                  pattern="(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)"
                />
              </>
            )}
          </InputWrap>
        </ItemWrap>

        <ItemWrap onSubmit={handlePhoneSubmit}>
          <InputWrap>
            <Span>Phone: </Span>
            <Label htmlFor={id}></Label>
            {!isEditPhone && (
              <>
                <EditButton type="button" onClick={() => setIsEditPhone(true)}>
                  <Edit  />
                </EditButton>
                <Input readOnly defaultValue={data.phone || phone} placeholder='+380XXXXXXXXX'/>
              </>
            )}
            {isEditPhone && (
              <>
                <EditButton type="submit">
                  <CheckIcon />
                </EditButton>
                <Input
                  type="phone"
                  name="phone"
                  id={id}
                  defaultValue={phone}
                  minlength="12"
                  maxlength="12"
                  placeholder="+380XXXXXXXXX"
                />
              </>
            )}
          </InputWrap>
        </ItemWrap>

        <ItemWrap onSubmit={handleCitySubmit}>
          <InputWrap>
            <Span>City:</Span>
            <Label htmlFor={id}></Label>
            {!isEditCity && (
              <>
                <EditButton type="button" onClick={() => setIsEditCity(true)}>
                  <Edit />
                </EditButton>
                <Input readOnly defaultValue={data.city || city} placeholder="Kyiv"/>
              </>
            )}
            {isEditCity && (
              <>
                <EditButton type="submit">
                  <CheckIcon />
                </EditButton>
                <Input
                  type="text"
                  name="city"
                  id={id}
                  defaultValue={city}
                  placeholder="Kyiv"
                />
              </>
            )}
          </InputWrap>
        </ItemWrap>
      </Wrapper>
    );
};

export default UserDataItem;