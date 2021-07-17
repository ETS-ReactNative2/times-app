import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Text } from "react-native";

import { TRADUCTION } from "../utils/ConstantTraduction";

const TextTraduction = (props) => {
  const user_store = useSelector((state) => state.user);
  const [language, setLanguages] = useState(user_store.language);

  useEffect(() => {
    setLanguages(
      props.language == undefined ? user_store.language : props.language
    );
  }, [user_store.language]);

  return (
    <Text {...props}>
      {props.text == undefined || props.text == ""
        ? TRADUCTION[props.key_text != undefined ? props.key_text : ""][
            language
          ]
        : props.text}
    </Text>
  );
};

export default TextTraduction;
