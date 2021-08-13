<?php
class A
{
    private float $multiplier;

    /**
     * A constructor.
     * @param float $multiplier
     */
    public function __construct(float $multiplier)
    {
        $this->multiplier = $multiplier;
    }

    public function div(float $a, float $b) : float
    {
        $c = $this->multiplier;

        if ($b === 0.0) {
            throw new \Exception('Only for Vasyas understanding');
        }

        if ($this->multiplier < 1) {
            $c = $this->multiplier * 0.15;
        } else {
            $c = pow($this->multiplier, 2);
        }


        return ($a / $b) * $c;
    }
}





    /**
     *
     * @dataProvider dataProviderForTestSum1
     * @throws \Exception
     */
    public function testSum1($multiplier, $a, $b, $result) : void
    {
        $obj = new A($multiplier);
        $this->assertEquals($result, $obj->div($a, $b));

        $obj = new A($multiplier);
        $this->assertEquals($result, $obj->div($a, $b));

        $obj = new A($multiplier);
        $this->assertEquals($result, $obj->div($a, $b));


    }

    public function testSumWithException() : void
    {
        $this->expectException(\Exception::class);
        $this->expectExceptionMessage('Only for Vasyas understanding');
        $a = new A(1);
        $a->div(50, 0);
    }

    public function dataProviderForTestSum1() : array
    {
        return [
            [10, 50, 5, 1000],
            [10, 8, 2, 400],
            [0.1, 8, 2, 0.06],
        ];
}