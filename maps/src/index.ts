import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// restrict engineer to only a few method of google.map by CustomMap
const map = new CustomMap('map');
const user = new User();
const company = new Company()
map.addMarker(user)
/* Implicit type check that user implements location
 that satisifies mappable interface
 */
map.addMarker(company)
