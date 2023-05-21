// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {useMemo} from "react";
import { nanoid } from "nanoid";

// import { selectUser } from 'redux/auth/auth-selector';
// import { info } from 'redux/auth/auth-operations';
import {Edit, EditButton, Input, ItemWrap, Wrapper, Label, InputWrap, Span, } from './UserDataItem.styled';

const UserDataItem = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  // const { email, phone, birthday, city} = user;
  // const userName = email.split("@")[0];
  // const [disabled, setDisabled] = useState(true);
  // const [data, setData] = useState({});
  const id = useMemo(() => nanoid(), []);

    // const onEditBtn = () => {
    
    //   setTimeout(() => {
      
    //   }, 1000);
    // };

    const  handleSubmit = (event) => {
      event.preventDefault();
      // const form = event.currentTarget;
      // const userName = form.elements.name.value;
      // const userPhone = form.elements.phone.value;
      // const userBirthday = form.elements.birthday.value;
      // const userEmail = form.elements.email.value;
      // const userCity = form.elements.city.value;


      // const req = {[name]: data };
      // dispatch(info(req))
 
      // dispatch(info({
      //   name: userName, 
      //   email: userEmail,
      //   birthday: userBirthday,
      //   phone: userPhone,
      //   city: userCity}));
      };
 
    return (
    <Wrapper onSubmit={handleSubmit}>
      
    <ItemWrap><InputWrap><Span>Name: </Span><Label htmlFor={id}></Label>
    <EditButton type='submit'><Edit /></EditButton>
     <Input type='text' 
   //onChange={e => setData(e.target.value)}
     name="name" id={id}   
    pattern="[A-Za-z]{1,32}"/>
    </InputWrap></ItemWrap>
     
    <ItemWrap><InputWrap><Span>Email: </Span><Label htmlFor={id}></Label>
    <EditButton type='button'><Edit /></EditButton>
     <Input 
     type='email' 
     name='email' id={id} 
     pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"/>
     </InputWrap></ItemWrap>
     
    <ItemWrap><InputWrap><Span>Birthday: </Span><Label htmlFor={id}></Label>
    <EditButton type='button'><Edit /></EditButton>
     <Input type='text' name='birthday' id={id} 
     placeholder="DD.MM.YYYY"
     dateFormat="dd.MM.yyyy"
     pattern="(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)"/></InputWrap></ItemWrap>

    <ItemWrap><InputWrap><Span>Phone: </Span><Label htmlFor={id}></Label>
    <EditButton type='button'><Edit /></EditButton>
     <Input type='phone' name="phone" id={id} 
       pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
       minlength="13"
       maxlength="13"
       placeholder="+380XXXXXXXXX"  />
       </InputWrap></ItemWrap>
     
    <ItemWrap><InputWrap><Span>City:</Span><Label htmlFor={id}></Label>
    <EditButton type='button'><Edit /></EditButton>
     <Input type='text' name="city" id={id} 
      pattern="/([A-Za-z]+(?: [A-Za-z]+)*)/"

      placeholder='Kyiv'/>
      </InputWrap></ItemWrap>



        {/* 
        {isEdit ? <Input autoComplete={label} {...props} id={id}/> : <Input autoComplete={label} {...props} id={id} {...field} readOnly/> }
        {isCheck ? <EditButton type='button' onClick={event => checkData(event.currentTarget.value)}><CheckIcon /></EditButton> : (
          <EditButton type="button" onClick={onEditBtn}><Edit /></EditButton>
        )}
        </InputWrap> */}
    </Wrapper>
    );
};

// UserDataItem.propTypes = {
//     label: PropTypes.string.isRequired,
//     handleChange: PropTypes.func,
// };

export default UserDataItem;