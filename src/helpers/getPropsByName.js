import props from './../data/props.json';

export const getPropsByName = (name = '') => {
  name = name.trim().toLowerCase();

  if(name.length === 0) {
    return props;
  };

  return props.filter( prop => prop.ufProp0.toLowerCase().includes(name) || prop.ufProp1.toLowerCase().includes(name) );
}