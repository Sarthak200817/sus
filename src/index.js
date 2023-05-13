require("dotenv").config();
const { error } = require("console");
const { Client, GatewayIntentBits, Partials,  RoleManager, roleMention} = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
     GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildMembers,
  ],
  partials: [Partials.Channel,Partials.Message, Partials.Reaction],

});
 //const guild = client.guilds.cache.get('1098510430479065088');
const prefix = "+";
client.login(process.env.DISCORDJS_BOT_TOKEN);
//after this all code is for discord
/*client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}`)
});*/
client.on('ready', async () => {

  try {
    const guild = await client.guilds.fetch('1098510430479065088');
    console.log(`Logged in as ${client.user.username}`);
  } catch (error) {
    console.log('Unable to find guild!', error);
  }
});
//const roles = guild.roles.cache.find(role => role.name === 'rolename');
//const member = guild.members.cache.get('memberid');
function index(s, find)
    {
        var ind = -1;
        var i = 0;
        for (i = 0; i < s.length; i++)
        {
            var a = s.charAt(i);
            if (a === find)
            {
                ind = i;
                break;
            }
        }
        return ind;
    }
   var des,opt1,trash,role1,react1,opt2,role2,react2,opt3,opt4,role3,react3,role4,react4;
   const ret=function(rets){
    return rets;
   }
    var right=false;
    client.on("messageCreate",(message)=>{
      var input=message.content;
      if(input.startsWith(prefix)===true){
        input=input.replace(prefix,"");
         if (input.startsWith("des{")===true){
           input=input.replace("des{","");
           des=input.substring(0,index(input,"}"));
           trash=input.substring(0,index(input,"}")+1);
           input=input.replace(trash,"");
           console.log(des);

            if (input.startsWith(" opt1{")===true){
           input=input.replace(" opt1{","");
           opt1=input.substring(0,index(input,"}"));
           trash=input.substring(0,index(input,"}")+1);
           input=input.replace(trash,"");
           console.log(opt1);
             
              if (input.startsWith(" role1{")===true){
               input=input.replace(" role1{","");
               role1=input.substring(0,index(input,"}"));
               trash=input.substring(0,index(input,"}")+1);
               input=input.replace(trash,"");
               console.log(role1);
                
                if (input.startsWith(" react1{")===true){
                input=input.replace(" react1{","");
                react1=input.substring(0,index(input,"}"));
                trash=input.substring(0,index(input,"}")+1);
                input=input.replace(trash,"");
                console.log(react1);



                if (input.startsWith(" opt2{")===true){
                  input=input.replace(" opt2{","");
                  opt2=input.substring(0,index(input,"}"));
                  trash=input.substring(0,index(input,"}")+1);
                  input=input.replace(trash,"");
                  console.log(opt2);

                  if (input.startsWith(" role2")===true){
                    input=input.replace(" role2{","");
                    role2=input.substring(0,index(input,"}"));
                    trash=input.substring(0,index(input,"}")+1);
                    input=input.replace(trash,"");
                    console.log(role2);

                    if (input.startsWith(" react2{")===true){
                      input=input.replace(" react2{","");
                      react2=input.substring(0,index(input,"}"));
                      trash=input.substring(0,index(input,"}")+1);
                      input=input.replace(trash,"");
                      console.log(react2);


                      if (input.startsWith(" opt3{")===true){
                        input=input.replace(" opt3{","");
                        opt3=input.substring(0,index(input,"}"));
                        trash=input.substring(0,index(input,"}")+1);
                        input=input.replace(trash,"");
                        console.log(opt3);


                        if (input.startsWith(" role3{")===true){
                          input=input.replace(" role3{","");
                          role3=input.substring(0,index(input,"}"));
                          trash=input.substring(0,index(input,"}")+1);
                          input=input.replace(trash,"");
                          console.log(role3);


                          if (input.startsWith(" react3{")===true){
                            input=input.replace(" react3{","");
                            react3=input.substring(0,index(input,"}"));
                            trash=input.substring(0,index(input,"}")+1);
                            input=input.replace(trash,"");
                            console.log(react3);
                            
                              if (input.startsWith(" opt4{")===true){
                              input=input.replace(" opt4{","");
                              opt4=input.substring(0,index(input,"}"));
                              trash=input.substring(0,index(input,"}")+1);
                              input=input.replace(trash,"");
                              console.log(opt4);

                                if (input.startsWith(" role4{")===true){
                                  input=input.replace(" role4{","");
                                   role4=input.substring(0,index(input,"}"));
                                   trash=input.substring(0,index(input,"}")+1);
                                   input=input.replace(trash,"");
                                   console.log(role4);

                                        if (input.startsWith(" react4{")===true){
                                              input=input.replace(" react4{","");
                                             react4=input.substring(0,index(input,"}"));
                                             trash=input.substring(0,index(input,"}")+1);
                                            input=input.replace(trash,"");
                                             console.log(react4);
                                            message.react("✅");
                                            console.log()
                                            right=true;
                                            setTimeout( function(){
                                      message.delete();
                                      },5000);
                                            }
                                             else{//react4
                                       setTimeout( function(){
                                      message.delete();
                                      },2000);
                                      message.channel.send("Wrong input").then(sentMessage => {
                                      sentMessage.delete(5000)})  ;
                                   }
                                  
                                  }
                                  else{//role4
                                       setTimeout( function(){
                                      message.delete();
                                      },2000);
                                      message.channel.send("Wrong input").then(sentMessage => {
                                      sentMessage.delete(5000)})  ;
                                   }

                              }
                              
                              else{//opt4
                            setTimeout( function(){
                          message.delete();
                           },2000);
                           message.channel.send("Wrong input").then(sentMessage => {
                            sentMessage.delete(5000)})  ;
                          }
                            

                          }
                          else{//react3
                            setTimeout( function(){
                          message.delete();
                           },2000);
                           message.channel.send("Wrong input").then(sentMessage => {
                            sentMessage.delete(5000)})  ;
                          }

                        }
                        else{//role3
                          setTimeout( function(){
                        message.delete();
                         },2000);
                         message.channel.send("Wrong input").then(sentMessage => {
                          sentMessage.delete(5000)})  ;
                        }

                      }
                        
                      else{//opt3
                          setTimeout( function(){
                        message.delete();
                         },2000);
                         message.channel.send("Wrong input").then(sentMessage => {
                          sentMessage.delete(5000)})  ;
                        }

                      
                    }
                    else{//react2
                      setTimeout( function(){
                    message.delete();
                     },2000);
                     message.channel.send("Wrong input").then(sentMessage => {
                      sentMessage.delete(5000)})  ;
                    }
                  }
                  else{//role2
                    setTimeout( function(){
                  message.delete();
                   },2000);
                   message.channel.send("Wrong input").then(sentMessage => {
                    sentMessage.delete(5000)})  ;
                  }
                }
                else{//opt2
                  setTimeout( function(){
                    message.delete();
                     },2000);
                 message.channel.send("Wrong input").then(sentMessage => {
                 sentMessage.delete(5000)})  ;  
                 } 

              }
              else{
                setTimeout( function(){
                  message.delete();
                   },2000);
               message.channel.send("Wrong input").then(sentMessage => {
               sentMessage.delete(5000)})  ;  
               }
                }
              else{
                setTimeout( function(){
          message.delete();
        },2000);
             message.channel.send("Wrong input").then(sentMessage => {
              sentMessage.delete(5000)})  ; 
            }

        
      }
          else{
            setTimeout( function(){
          message.delete();
        },2000);
           message.channel.send("Wrong input").then(sentMessage => {
            sentMessage.delete(5000)})  ;  
          }
          
        }
          else{
            setTimeout( function(){
          message.delete();
           },2000);
           message.channel.send("Wrong input").then(sentMessage => {
            sentMessage.delete(5000)})  ;
            }


            //roles create
            const guild = message.guild;
            /*guild.roles.create({
            data: {
          name: role1,
          color: 'BLUE',
          reason: 'we needed a role for Super Cool People',
         } 
         .then(console.log)
         .catch(console.error)
        });

        guild.roles.create({
          data: {
        name: role2,
        color: 'RED',
        reason: 'we needed a role for Super Cool People',
       } 
       .then(console.log)
       .catch(console.error)
      });
      guild.roles.create({
        data: {
      name: role3,
      color: 'GREEN',
      reason: 'we needed a role for Super Cool People',
     } 
     .then(console.log)
     .catch(console.error)
    });
    guild.roles.create({
      data: {
    name: role4,
    color: 'WHITE',
    reason: 'we needed a role for Super Cool People',
   } 
   .then(console.log)
   .catch(console.error)
  });*/
  if(right===true){
    message.channel.send(`${des}`)
    var id1,id2,id3,id4;
    const roleManager=guild.roles;
    roleManager.create({
    
        name: role1,
        color: "Random",
        mentionable: true,
        reason: 'Creating a new role',
    })
    .then(role => {
        id1 = role.id;
      console.log(`Created new role with name ${role.name} and ID ${id1} `);
      message.channel.send(`${opt1}: <@&${id1}> -${react1}`);
    })
      .catch(console.error);

    roleManager.create({
    
        name: role2,
        color: "Random",
        mentionable: true,
        reason: 'Creating a new role',
    })
    .then(role => {
       id2 = role.id;
      console.log(`Created new role with name ${role.name} and ID ${id2}`);
      message.channel.send(`${opt2}: <@&${id2}> -${react2}`);
    })
      .catch(console.error);
  
    roleManager.create({
    
        name: role3,
        color: "Random",
        mentionable: true,
        reason: 'Creating a new role',
    })
    .then(role => {
      id3 = role.id;
      console.log(`Created new role with name ${role.name} and ID ${id3}`);
      message.channel.send(`${opt3}: <@&${id3}> -${react3}`);
    })
      .catch(console.error);
   
    roleManager.create({
    
        name: role4,
        color:"Random",
        mentionable: true,
        reason: 'Creating a new role',
    })
    .then(role => {
      id4 = role.id;
      console.log(`Created new role with name ${role.name} and ID ${id4}`);
      message.channel.send(`${opt4}: <@&${id4}> -${react4}`);
    })
      .catch(console.error);
    //message sent
    message.channel.send("React here").then(sentMessage => {
      react1=react1.trim();
      react2=react2.trim();
      react3=react3.trim();
      react4=react4.trim();
      sentMessage.react(react1)
      .catch(console.error,message.channel.send("Wrong emoji").then(sentMessage => {
        sentMessage.delete(5000)}))
      sentMessage.react(react2)
      .catch(console.error,message.channel.send("Wrong emoji").then(sentMessage => {
        sentMessage.delete(5000)}))
      sentMessage.react(react3)
      .catch(console.error,message.channel.send("Wrong emoji").then(sentMessage => {
        sentMessage.delete(5000)}))
      sentMessage.react(react4)
      .catch(console.error,message.channel.send("Wrong emoji").then(sentMessage => {
        sentMessage.delete(5000)}));//rolesdone with emojis
    });
    //const color=["Red","Pink","Purple","Deep Purple","Indigo","Blue","Light Blue","Cyan","Teal","Green","Olive","Light Green","Lime","Yellow","Amber","Orange","Deep Orange","White","Grey","Black"];
   client.on('messageReactionAdd',(reaction,user)=>{
    const message=reaction.message;
  const reactions = message.reactions.cache.filter((reaction) => {
    return reaction.users.cache.has(user.id);
  })
    const member = message.guild.members.cache.get(user.id);
    //console.log(reactions.size);
  
    if(reactions.size>1&&!user.bot){
      reaction.users.remove(user.id)
    }
    else{
    
      if (user.bot) return;
     else  if(reaction.emoji.name===react1){
        const role = message.guild.roles.cache.find(role => role.name === role1);
        member.roles.add(role);
      }
      else if(reaction.emoji.name===react2){
        const role = message.guild.roles.cache.find(role => role.name === role2);
        member.roles.add(role);
      }
      else if(reaction.emoji.name===react3){
        const role = message.guild.roles.cache.find(role => role.name === role3);
        member.roles.add(role);
      }
      else if(reaction.emoji.name===react4){
        const role = message.guild.roles.cache.find(role => role.name === role4);
        member.roles.add(role);
      }
   }
    });
    client.on("messageReactionRemove",(reaction,user) =>{
      const message=reaction.message;
      const member = message.guild.members.cache.get(user.id);
      if(user.bot)return;

      else if(reaction.emoji.name===react1){
        const role = message.guild.roles.cache.find(role => role.name === role1);
        member.roles.remove(role); 
          }
          else if(reaction.emoji.name===react2){
            const role = message.guild.roles.cache.find(role => role.name === role2);
            member.roles.remove(role); 
              }
              else if(reaction.emoji.name===react3){
                const role = message.guild.roles.cache.find(role => role.name === role3);
                member.roles.remove(role); 
                  }
                  else if(reaction.emoji.name===react4){
                    const role = message.guild.roles.cache.find(role => role.name === role4);
                    member.roles.remove(role); 
                      }
          
    });
  
}

  }
      else if(message.author.bot) return;
      else{
        setTimeout( function(){message.delete();},2000);
        message.channel.send("Wrong input").then(sentMessage => {
    sentMessage.delete(5000);
       });
      }
    });
