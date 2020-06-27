import { fromEvent } from 'rxjs';
import { pluck, map } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas auctor metus scelerisque viverra. Curabitur eget posuere ligula. Quisque ut velit sit amet neque sodales sagittis at eu mi. Integer ultrices dictum finibus. Phasellus quis mauris elit. Suspendisse in pretium felis. Sed semper eget augue eget congue. Sed ut nibh turpis. Sed nibh justo, lobortis ut sagittis volutpat, vestibulum id ante. Nullam accumsan et nulla in venenatis. Morbi vitae ex vestibulum, eleifend est eu, commodo ex. Proin elementum eros non massa venenatis, in viverra erat ornare. Nam maximus eget est quis tempus.
<br/><br/>
Suspendisse scelerisque interdum purus eu gravida. Proin tempor quam urna, vel imperdiet dolor bibendum at. Pellentesque commodo gravida egestas. In ut maximus diam. Suspendisse ut ullamcorper mi. Curabitur hendrerit ante lectus, volutpat vehicula turpis condimentum vitae. Suspendisse id cursus libero, in rhoncus mi. Etiam iaculis massa eu neque posuere laoreet. Suspendisse vitae ligula non tellus bibendum viverra.
<br/><br/>
Sed sagittis tellus non feugiat luctus. Aenean quis arcu vitae magna blandit porta. Donec at rutrum odio. Fusce rutrum tortor sit amet eleifend fringilla. Aliquam ut risus nisi. Ut scelerisque, massa nec pellentesque dictum, risus nisi porta lorem, quis ultricies purus nisl ac nulla. Vivamus aliquet euismod lorem. Cras eu leo non quam dapibus tristique nec sit amet est.
<br/><br/>
Suspendisse potenti. Donec mollis dolor eget lacus viverra euismod. Integer non mauris ligula. Suspendisse eleifend at justo vel fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus porta dictum lectus vitae tincidunt. Nam hendrerit ultrices metus, vel sagittis est tincidunt sed. Mauris eget tortor quam.
<br/><br/>
Integer eget eleifend tellus, laoreet mollis massa. Aenean neque velit, cursus at felis sit amet, tincidunt dignissim tellus. Mauris sagittis lectus vulputate sodales rutrum. In non ipsum ut turpis efficitur commodo ac id ligula. Praesent ornare varius tempus. Sed dapibus sodales dui, egestas consequat risus consectetur quis. Donec pellentesque metus mauris, id pulvinar nibh dignissim nec.
<br/><br/>
Fusce consequat sollicitudin nisl. Duis condimentum accumsan nibh quis gravida. Sed maximus placerat scelerisque. Pellentesque scelerisque accumsan porta. In hac habitasse platea dictumst. In vulputate metus dui, eu dignissim nisi varius et. Quisque tempor metus erat, eu aliquet quam ornare vel. Nullam elementum erat vitae tincidunt finibus. Praesent sed rutrum odio. Fusce hendrerit consectetur sagittis. Donec vitae nisl quis magna cursus gravida. Nunc euismod mollis mi vitae ullamcorper.
<br/><br/>
Curabitur nec mi volutpat, dictum elit quis, luctus urna. Suspendisse tincidunt faucibus arcu suscipit posuere. Vivamus et nisi non mauris scelerisque venenatis non ac tellus. Nunc placerat euismod turpis, eget lacinia risus ultricies quis. Curabitur dictum rutrum enim vel aliquet. Nulla vehicula arcu vel elit vestibulum, vel tristique lorem luctus. Sed suscipit turpis vitae ante ornare semper. Fusce lobortis scelerisque euismod. Nam scelerisque imperdiet nisl quis blandit. Sed faucibus tempor efficitur.
<br/><br/>
Sed auctor porttitor quam ac auctor. Nullam porttitor sagittis ligula, non rhoncus risus fringilla nec. Donec fringilla non sem vel dignissim. Nulla gravida quam sed mi viverra, non auctor leo porta. Sed luctus non neque quis luctus. Sed dictum, elit vitae egestas faucibus, orci mi iaculis diam, ut euismod mauris nisi at lacus. Quisque vel consequat massa. Integer iaculis sit amet arcu vitae ultricies. Aliquam aliquam mauris hendrerit ante ultricies sollicitudin. Fusce vel erat vel mi convallis hendrerit. Curabitur vel faucibus diam. Mauris dapibus feugiat dolor. Praesent feugiat quam a malesuada gravida. Morbi blandit vulputate lorem, eget posuere velit auctor ut.
<br/><br/>
Fusce in purus massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Nam viverra tristique ligula ut semper. Morbi bibendum leo id fringilla tincidunt. Donec ultrices tellus turpis, vel sollicitudin leo convallis sed. Curabitur condimentum sagittis dignissim. Duis vestibulum laoreet est, non suscipit massa. Integer lobortis nisl nec hendrerit tristique. Maecenas ac ligula vehicula, ultricies justo mollis, bibendum lectus. Mauris pulvinar laoreet lorem, non porttitor nisl vestibulum eu. Praesent dictum erat mattis lorem vulputate, non semper massa hendrerit. Nam ultricies nec est non ornare. In luctus quis felis at luctus.
<br/><br/>
Integer ut ante ullamcorper, lacinia nisi vitae, facilisis arcu. Praesent eleifend maximus ex ac finibus. Vivamus at sem cursus, porttitor dolor vitae, eleifend arcu. Phasellus sed odio dolor. Sed maximus erat orci, id semper orci auctor vitae. Maecenas vitae ipsum bibendum, mattis nisl vitae, mollis elit. Donec mattis justo sit amet mi venenatis, a mattis risus consectetur. Phasellus id urna bibendum, faucibus risus lacinia, vestibulum risus. Maecenas auctor metus id elit laoreet malesuada. Donec sit amet interdum ligula, quis aliquam leo. Curabitur interdum, mi eget rutrum feugiat, ligula justo dapibus justo, ac congue justo lacus id felis. Phasellus non facilisis erat, et facilisis eros. Curabitur orci nunc, feugiat non pretium in, tincidunt sed sapien.
`;

const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);


// Stream
const scroll$ = fromEvent(document, 'scroll');

// scroll$.pipe(map((e: any) => {
//     return {

//     total: e.srcElement.scrollingElement
//     }
// })).subscribe(console.log);

const progress$ = scroll$.pipe(
    map((e: any) => {
        return {
        client: e.srcElement.scrollingElement.clientHeight,
        current: e.srcElement.scrollingElement.scrollTop, 
        total: e.srcElement.scrollingElement.scrollHeight 
        }
    }),
    map( o => ((o.current)/(o.total-o.client))*100 )

);

progress$.subscribe( p => {
    progressBar.style.width = `${p}%`;
} );