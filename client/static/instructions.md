# Required Features for Bucket Lists:

1. Login and logout.<br>
1.1 Upon page load, a prompt should appear to ask for the users name and save it as a logged in user  <b>Done</b><br>
1.2 Users should be able to log out.  A prompt would then pop up again for the user to be able to log back in. <b>DRAFT, doesn't use logout call yet.</b>
2. Dashboard displays the logged user's created bucket list items and the bucket list he was tagged with by other users.<b>DONE</b><br>
3. Ability to add a bucket list item. Newly added bucket list item should only appear on the bucket list (profile) of the person who created the item and on the user(s) the said item is being tagged to. <b>DONE</b><br>
4. Dashboard, at bucket list add, Tagging of other users. The bucket list item being tagged to the user will be included on the tagged user's bucket list  <b>DONE</b><br>
   4.1 When user A tags B, the bucket item will automatically append to User B's Bucket list, both users own the bucket item.<b>DONE</b><br>
   4.2 Pulldown shows all the other users<b>DONE</b><br>
   4.3 Title must be 5 char, description must be 10 <b> needs errmsg </b></br>
   4.4 List of to-do items mucht display<b>DONE</b><br>
    4.4.1 Checkbox<b>DONE</b><br>
    4.4.2 Title<b>DONE</b><br>
    4.4.3 description<b>DONE</b><br>
    4.4.4 Date Created<b>DONE</b><br>
5. Update of bucket list item status (checked or unchecked) ONLY by the user who created the item or the user who was tagged with the item. Upon update, tagged users should also see a new status. <b>DONE</b><br>
6. Ability to see other users' profile with their own bucket list and bucket list items he/she is tagged with.
 <b>Done</b>
7. You must be able to deploy your work to Amazon EC2 and provide the IP address or subdomain/domain name to where your work has been deployed. Please note that Heroku deployment is not honored. <b>OPEN</b>

# Note:

The wireframe is available for download here.
Create a 2-3 video showing what you have built. On the video, show the functionality of the page you have built. You may download a trial version of Jing or Snag-it or Quicktime for video creation. You may save it on Dropbox public folder and  copy the public link.
To prevent other students from copying your work, please make sure your video demo is set to unlisted or with a password, and code is not saved on GitHub.
To minimize score deduction, please make sure you upload the complete requirements (database file, video demo).
If you are having trouble uploading files on the Exam App, please DO NOT unlock another exam. Please email the file to remote-instructors@codingdojo.com and CC your instructor.

# Design

## Partials
* Login prompt  DONE
* Dashboard  <br>
    need area for error messages

* Users bucketList <b>Done</b><br>
    read only<br>

## Client controllers
* users_controller ALL <b>Done</b><br>
** Show all the open and pending items

* dashboard_controller Done<br>
** index for user<b>Done</b><br>
** Add to List <b>Done</b><br>
** Check box done <b>Done<b><br>
** Links to other users lists <b>Done<b><br>
* user_list_controller Done<br>
** show list  Done<br>


## Client factories
* user_factory  <b>Done</b><br>
** new_user <br>
* bucket_factory  <b>Done</b><br>
** index   <b>Done</b> <br>
** new_list <b>Done</b><br>
** update <b>Done</b><br>
* session_factory<b>Done</b><br>

## Server routes & controllers
* POST users login  <b>Done</b>
* GET users index  <b>Done</b>
* GET users show ID  <b>Done</b>
* POST users create
* PUT users update
* POST bucketlist create<b>Done, needs validations</b>
* PUT bucklist update <b>Done</b>

## Models
* User  <b>DONE</b><br>
** name is unique<br>
** name is required<br>
** bucketlists reference to other tabel
** create date<br>

* bucketlist   <b>DONE</b><br>
** title: required >5 characters
** desc: required > 10 characters
** _creator tied back to users
** created/updated <br>
