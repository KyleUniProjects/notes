# Midterm Cheat Sheet

## C-Assembly Equivalents

| C                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Assembly                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre><code class="fenced-code-block language-c"><span class="token keyword">unsigned</span> <span class="token keyword">char</span> A<span class="token punctuation">;</span><br/><span class="token keyword">unsigned</span> <span class="token keyword">char</span> <span class="token operator">*</span>X<span class="token punctuation">,</span> <span class="token operator">*</span>Y<span class="token punctuation">;</span><br/><br/><span class="token keyword">while</span> <span class="token punctuation">(</span>A <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br/>    <span class="token operator">*</span>X<span class="token operator">++</span> <span class="token operator">=</span> <span class="token operator">*</span>Y<span class="token operator">++</span><span class="token punctuation">;</span><br/>    A<span class="token operator">--</span><span class="token punctuation">;</span><br/><span class="token punctuation">}</span></code></pre>                                                                                                                                                                                                                                                                                                                                                                                                     | <pre><code class="fenced-code-block language-llvm"><span class="token label">L1:</span> <span class="token keyword">tsta</span>                    <span class="token comment">; (A != 0)?</span><br/>    <span class="token keyword">beq</span>    L2               <span class="token comment">; If false, jump to L2</span><br/>    <span class="token keyword">movb</span>   <span class="token number">1</span><span class="token punctuation">,</span>X+ <span class="token number">1</span><span class="token punctuation">,</span>Y+        <span class="token comment">; X=Y, increment both</span><br/>    <span class="token keyword">deca</span>                    <span class="token comment">; Decrement a</span><br/>    <span class="token keyword">bra</span>    L1               <span class="token comment">; Branch to L1</span><br/><span class="token label">L2:</span><br/><br/></code></pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <pre><code class="fenced-code-block language-c"><span class="token keyword">void</span> <span class="token function">msdelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br/>    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">6250</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><br/>        <span class="token function">__asm</span><span class="token punctuation">(</span><span class="token string">"nop"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><br/><span class="token punctuation">}</span></code></pre>                                                                                                                                                                                                                                                                                                                                                                                                                                               | <pre><code class="fenced-code-block language-llvm"><span class="token label">msdelay:</span>    <span class="token keyword">ldd</span>    <span class="token variable">#6250</span>        <span class="token comment">; Set delay cycles</span><br/><span class="token label">.Loop:</span>      <span class="token keyword">nop</span>                 <span class="token comment">; Do nothing</span><br/>            <span class="token keyword">dbne</span>    <span class="token keyword">d</span><span class="token punctuation">,</span><span class="token punctuation">.</span>Loop     <span class="token comment">; Decrement, branch if !=0</span><br/>            <span class="token keyword">rts</span>                 <span class="token comment">; return</span></code></pre>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <pre><code class="fenced-code-block language-c"><span class="token keyword">void</span> <span class="token function">test_switch</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span><br/>    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> d<span class="token punctuation">;</span><br/>    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><br/>        d <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span><br/>    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><br/>        d <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span><br/>    <span class="token keyword">else</span><br/>        d <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span><br/><span class="token punctuation">}</span></code><br/><br/><br/><br/><br/><br/></pre> | <pre><code class="fenced-code-block language-llvm"><span class="token label">test_switch:</span><br/>    <span class="token keyword">cpa</span>    <span class="token variable">#1</span>      <span class="token comment">; if (a == 1)</span><br/>    <span class="token keyword">beq</span>    <span class="token punctuation">.</span>L6     <span class="token comment">;   branch to .L6</span><br/>    <span class="token keyword">cpa</span>    <span class="token variable">#2</span>      <span class="token comment">; elif (a == 2)</span><br/>    <span class="token keyword">beq</span>    <span class="token punctuation">.</span>L7     <span class="token comment">;   branch to .L7</span><br/>    <span class="token keyword">ldd</span>    <span class="token variable">#20</span>     <span class="token comment">; else { d = 20 }</span><br/><span class="token label">.L3:</span><br/>    <span class="token keyword">rts</span>            <span class="token comment">; return</span><br/><span class="token label">.L7:</span><br/>    <span class="token keyword">ldd</span>    <span class="token variable">#10</span>     <span class="token comment">; d = 10</span><br/>    <span class="token keyword">bra</span>    <span class="token punctuation">.</span>L3     <span class="token comment">; branch to .L3</span><br/><span class="token label">.L6:</span><br/>    <span class="token keyword">ldd</span>    <span class="token variable">#5</span>      <span class="token comment">; d = 5</span><br/>    <span class="token keyword">bra</span>    <span class="token punctuation">.</span>L3     <span class="token comment">; branch to .L3</span></code></pre> |

## Bitwise Operators

| Operator                  | Definition              | Example, `a=0b0011`, `b=0b0110`          |
| ------------------------- | ----------------------- | ---------------------------------------- |
| $\text{\textasciitilde}$  | Flip all bits           | $\text{\textasciitilde} a =$`0b1100`     |
| $\And$                    | Bit in both operands    | $a \And b=$`0b0010`                      |
| $\mid$                    | Bit in either operand   | $a \mid b=$`0b0111`                      |
| $\text{\textasciicircum}$ | Bit in only one operand | $a \text{\textasciicircum} ~b=$ `0b0101` |
| $\ll$                     | Move bits to the left   | $a \ll 2 =$ `0b1100`                     |
| $\gg$                     | Move bits to the right  | $b \gg 2 = $`0b0001`                     |

## 7-Segment Display

| <img src="../../assets/2022-03-02-18-36-50-image.png" title="" alt="" width="199"> | $X = DP \\ \text{0bXGFEDCBA} \\ \text{e.g: } 3 = $`0b01001111` |
| ---------------------------------------------------------------------------------- |:-------------------------------------------------------------- |