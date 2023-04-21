"use client";

import {useState} from "react";
import {IoEyeOffOutline, IoEyeOutline, SlEnvolope, SlLock} from "react-icons/all";
import useInput from "@hook/useInput";
import Input from "@src/component/Input";
import Button from "@src/component/Button";

const LoginForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      className={
        "border-gray-50/5 shadow-xl rounded-xl border-2 px-7 py-9 flex flex-col items-stretch justify-center gap-4 bg-white/5 w-[400px]"
      }
    >
      <Input
        id={"email"}
        value={email}
        onChange={onChangeEmail}
        type={"email"}
        placeholder={"이메일"}
        className={"pl-8 pr-4 font-light"}
      >
        <SlEnvolope
          className={"absolute top-[50%] translate-y-[-50%] left-2"}
          color={"white"}
        />
      </Input>
      <Input
        id={"password"}
        value={password}
        onChange={onChangePassword}
        type={showPassword ? "text" : "password"}
        placeholder={"비밀번호"}
        className={"px-8 font-light"}
      >
        <SlLock
          className={"absolute top-[50%] translate-y-[-50%] left-2"}
          color={"white"}
        />
        <button
          className={"absolute top-[50%] translate-y-[-50%] right-2"}
          type={"button"}
          onClick={() => setShowPassword((prevState) => !prevState)}
        >
          {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </button>
      </Input>
      <Button
        id={"login"}
        label={"로그인"}
        type={"submit"}
        className={"mt-3"}
        disabled={!(!!email && !!password)}
      />
    </form>
  );
};

export default LoginForm;
