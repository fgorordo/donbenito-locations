import props from './../data/props.json';

export const getPropsByName = (name = '') => {
  name = name.trim().toLowerCase();

  if(name.length === 0) {
    return props;
  };

  return props.filter( prop => prop.ufOwner.toLowerCase().includes(name) || (prop.ufCoOwner ? prop.ufCoOwner.toLowerCase().includes(name) : ''));
}