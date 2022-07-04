const button = document.createElement('button');
 button.innerText = 'PUSH';
 let section = document.createElement('section');
 section.appendChild(button);
 document.body.appendChild(section);
 let isTablePrepared = false;
 let users_array = [];


     button.addEventListener('click', () => {
     const get_users_array = async () => {
         const response = await fetch('./users.json');
         const jsoned = await response.json();
         users_array = await jsoned.users;
         const table = document.createElement('table');
         table.border = 2;
         table.style.width = '70%';
         table.style.height = '70vh';
         table.style.margin = '15vh 15%';
         table.id = 'existing_table';
         const thead = document.createElement('thead');
         thead.innerHTML = `<tr> <td> Name </td>  <td> Age </td>  <td> Surname </td>  </tr>`;
         thead.id = 'table_thead';
         thead.style.backgroundColor = 'green';
         const tbody = document.createElement('tbody');
         tbody.id = 'existing_table_body';
         const tfoot = document.createElement('tfoot');
         table.appendChild(thead);
         table.appendChild(tbody);
         table.appendChild(tfoot);
         document.body.appendChild(table);
         users_array.map(value => {
             let tr = document.createElement('tr');
             for (let key in value) {
                 let td = document.createElement('td');
                 td.innerHTML = `${value[key]}`
                 td.style.background = 'linear-gradient(to right, red, blue, gray)';
                 td.style.textAlign = 'center';
                 tr.appendChild(td);
                 tbody.appendChild(tr);
             }
         })
         const sort_the_table = () => {
             users_array.map(value => {
                 let tr = document.createElement('tr');
                 for (let key in value) {
                     let td = document.createElement('td');
                     td.innerHTML = `${value[key]}`
                     td.style.background = 'linear-gradient(to left, red, blue, gray)';
                     td.style.textAlign = 'center';
                     tr.appendChild(td);
                     tbody.appendChild(tr);
                 }
             })
         }
         thead.addEventListener('click', (event) => {
             tbody.innerHTML = '';
             if (event.target.innerText === 'Name') {
                 users_array.sort((a, b) => a.name.localeCompare(b.name));
                 sort_the_table();
             } else if(event.target.innerText === 'Age') {
                 users_array.sort((a,b) => a.age -  b.age );
                 sort_the_table();
             } else if (event.target.innerText === 'Surname') {
                 users_array.sort((a, b) => a.last_name.localeCompare(b.last_name));
                 sort_the_table();
             }
         })
         isTablePrepared = true;
     }
     get_users_array();
 })
