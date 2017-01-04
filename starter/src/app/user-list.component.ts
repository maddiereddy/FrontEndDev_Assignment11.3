import { Component }    from '@angular/core'
import { User }     from './user'
import { UserService }  from './user.service'


@Component({
    selector: 'user-list',
    providers: [UserService],
    template:
        `<button (click)="condition = !condition"
          [style.background] = "condition ? 'pink': 'lightgreen'">
          <b *myUnless="condition">Show user details</b>
          <b *myUnless="!condition">Hide user details</b>
        </button>
        <br><br>
         <div *ngFor="let user of users">
            <b myHighlight>{{user.name}} </b>
            <p *myUnless="!condition">
                <b>DOB: </b>{{user.dob}}, 
                <b>Email: </b>{{user.email}}, 
                <b>Status: </b>{{user.status}}, 
                <b>Enroll: </b><a href="{{user.enroll}}" myHighlight>Enroll test here</a>
                
                <br>
            </p>
            <p *myUnless="condition">
            </p>
         </div>`
})

export class UserListComponent {
    users: User[];
    constructor(userService: UserService) {
        this.users = userService.getUsers()
    }
}

