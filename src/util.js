export function getRedirectPath({type, avatar}){
  // type boss/genius
  // avatar ? bossInfo : list
  let url = (type==='boss')?'/boss':'/genius'
  if(!avatar){
    url += 'info'
  }
  return url
}
