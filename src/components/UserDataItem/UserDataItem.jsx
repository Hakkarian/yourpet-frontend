import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser, selectIsInputUpdated } from 'redux/auth/auth-selector';
import { changeIsInputUpdatedStatus } from 'redux/auth/auth-slice';
import { info, getUserInfo } from 'redux/auth/auth-operations';
import {
  Edit,
  EditButton,
  Input,
  ItemWrap,
  Wrapper,
  Label,
  InputWrap,
  Span,
  CheckIcon,
} from './UserDataItem.styled';

const UserDataItem = () => {
  const dispatch = useDispatch();

  const [isEditName, setIsEditName] = useState(false);
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditBirthday, setIsEditBirthday] = useState(false);
  const [isEditPhone, setIsEditPhone] = useState(false);
  const [isEditCity, setIsEditCity] = useState(false);

  const isInputUpdated = useSelector(selectIsInputUpdated);

  useEffect(() => {
    if (isInputUpdated) {
      dispatch(getUserInfo());
      dispatch(changeIsInputUpdatedStatus());
    }
  }, [dispatch, isInputUpdated]);

  const user = useSelector(selectUser);
  const { name, email, phone, birthday, city } = user;

  const handleNameSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userName = form.elements.name.value;

    dispatch(info({ name: userName }));
    setIsEditName(false);
  };

  const handleEmailSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.elements.email.value;

    dispatch(info({ email: userEmail }));
    setIsEditEmail(false);
  };

  const handleBirthdaySubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userBirthday = form.elements.birthday.value;

    dispatch(info({ birthday: userBirthday }));
    setIsEditBirthday(false);
  };

  const handlePhoneSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userPhone = form.elements.phone.value;

    dispatch(info({ phone: userPhone }));
    setIsEditPhone(false);
  };

  const handleCitySubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userCity = form.elements.city.value;

    dispatch(info({ city: userCity }));
    setIsEditCity(false);
  };

  return (
    <Wrapper>
      <ItemWrap onSubmit={handleNameSubmit}>
        <InputWrap>
          <Span>Name: </Span>
          <Label htmlFor="name-input"></Label>
          {!isEditName && (
            <>
              <EditButton type="button" onClick={() => setIsEditName(true)}>
                <Edit />
              </EditButton>
              <Input readOnly value={name || ''} placeholder="Name" />
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
                id="name-input"
                placeholder="Name"
                pattern="[A-Za-z]{1,32}"
              />
            </>
          )}
        </InputWrap>
      </ItemWrap>

      <ItemWrap onSubmit={handleEmailSubmit}>
        <InputWrap>
          <Span>Email: </Span>
          <Label htmlFor="email-input"></Label>
          {!isEditEmail && (
            <>
              <EditButton type="button" onClick={() => setIsEditEmail(true)}>
                <Edit />
              </EditButton>
              <Input
                readOnly
                value={email || ''}
                placeholder="example@gmail.com"
              />
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
                id="email-input"
              />
            </>
          )}
        </InputWrap>
      </ItemWrap>

      <ItemWrap onSubmit={handleBirthdaySubmit}>
        <InputWrap>
          <Span>Birthday: </Span>
          <Label htmlFor="birthday-input"></Label>
          {!isEditBirthday && (
            <>
              <EditButton type="button" onClick={() => setIsEditBirthday(true)}>
                <Edit />
              </EditButton>
              <Input readOnly value={birthday || ''} placeholder="DD.MM.YYYY" />
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
                id="birthday-input"
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
          <Label htmlFor="phone-input"></Label>
          {!isEditPhone && (
            <>
              <EditButton type="button" onClick={() => setIsEditPhone(true)}>
                <Edit />
              </EditButton>
              <Input readOnly value={phone || ''} placeholder="+380XXXXXXXXX" />
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
                id="phone-input"
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
          <Label htmlFor="city-input"></Label>
          {!isEditCity && (
            <>
              <EditButton type="button" onClick={() => setIsEditCity(true)}>
                <Edit />
              </EditButton>
              <Input readOnly value={city || ''} placeholder="Kyiv" />
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
                id="city-input"
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
